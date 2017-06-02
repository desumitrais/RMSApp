package com.mitrais.rms.employee.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.mitrais.rms.employee.model.Family;

/**
 * Created by made_sudarsana on 5/2/2017.
 */
public class FamilyRepositoryImpl implements FamilyCustRepository {
    @PersistenceContext
    EntityManager em;

    @Override
    public List<Family> searchByEmployee(String employeeGUID) {
        String hql = "select fam from Family fam where fam.employee.id = :employeeGUID and fam.recordStatusID <> 3";
        Query query = em.createQuery(hql);
        query.setParameter("employeeGUID", employeeGUID);
        List<Family> result = query.getResultList();
        return result;
    }
}
