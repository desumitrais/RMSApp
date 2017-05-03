package com.mitrais.rms.employee.dao;

import org.springframework.data.repository.CrudRepository;

import com.mitrais.rms.employee.model.Family;

/**
 * Created by made_sudarsana on 5/2/2017.
 */
public interface FamilyRepository extends CrudRepository<Family, String>, FamilyCustRepository {
}
