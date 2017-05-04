package com.mitrais.rms.employee.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.mitrais.rms.employee.model.GradeHistory;

/**
 * Created by made_sudarsana on 5/4/2017.
 */
public class GradeHistoryRepositoryImpl implements GradeHistoryCustRepository {
    @PersistenceContext
    EntityManager em;

    @Override
    public List<GradeHistory> searchByEmployee(String employeeGUID) {
        String hql = "select gradeHistory from GradeHistory gradeHistory where gradeHistory.employee.id = :employeeGUID and gradeHistory.recordStatusID <> 3";
        Query query = em.createQuery(hql);
        query.setParameter("employeeGUID", employeeGUID);
        List<GradeHistory> result = query.getResultList();
        return result;
    }
}
