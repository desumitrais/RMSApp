package com.mitrais.rms.employee.dao;

import com.mitrais.rms.employee.model.Family;

import java.util.List;

/**
 * Created by made_sudarsana on 5/2/2017.
 */
public interface FamilyCustRepository {
    List<Family> searchByEmployee(String employeeGUID);
}
