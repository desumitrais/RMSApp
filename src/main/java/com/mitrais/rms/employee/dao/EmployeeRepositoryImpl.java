package com.mitrais.rms.employee.dao;

import com.mitrais.rms.common.HQLQueryHelper;
import com.mitrais.rms.common.HQLQueryParam;
import com.mitrais.rms.common.RMSConstantsIntf;
import com.mitrais.rms.common.SearchParameter;
import com.mitrais.rms.employee.model.Employee;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
public class EmployeeRepositoryImpl implements EmployeeCustomRepository {
    @PersistenceContext
    EntityManager em;

    @Override
    public List<Employee> searchEmployee(SearchParameter searchParameter) {
        String hql = "select employee from Employee employee";
        addActiveFilter(searchParameter);
        List<HQLQueryParam> queryParamList = HQLQueryHelper.convertToQueryParamList(searchParameter);

        String queryString = HQLQueryHelper.constructParam(hql, queryParamList);

        Query query = em.createQuery(queryString);
        int firstResult = searchParameter.getPageable().getPageSize() * (searchParameter.getPageable().getPageNumber());
        List<Employee> result = query.setFirstResult(firstResult).setMaxResults(searchParameter.getPageable().getPageSize()).getResultList();
        return result;
    }

    private void addActiveFilter(SearchParameter searchParameter) {
        JSONObject activeFilter = new JSONObject();
        activeFilter.put(HQLQueryHelper.FIELD_KEY, "employee.recordStatusID");
        activeFilter.put(HQLQueryHelper.OPERATOR_KEY, HQLQueryParam.EQ_EXPRESSION);
        activeFilter.put(HQLQueryHelper.VALUE_KEY, RMSConstantsIntf.RecordStatus.ACTIVE);

        if (searchParameter.getFilter() != null) {
            JSONArray filterAndItem = new JSONArray();
            filterAndItem.add(searchParameter.getFilter());

            filterAndItem.add(activeFilter);

            JSONObject filterAnd = new JSONObject();
            filterAnd.put(HQLQueryHelper.LOGIC_KEY, "and");
            filterAnd.put(HQLQueryHelper.FILTERS_KEY, filterAndItem);

            searchParameter.setFilter(filterAnd);

        } else {
            searchParameter.setFilter(activeFilter);
        }
    }
}
