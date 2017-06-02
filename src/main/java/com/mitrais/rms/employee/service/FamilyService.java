package com.mitrais.rms.employee.service;

import com.mitrais.rms.employee.model.Family;

import java.util.List;

/**
 * Created by made_sudarsana on 5/2/2017.
 */
public interface FamilyService {
    List<Family> searchByEmployee(String employeeGUID);

    String saveFamily(Family employee);

    Family updateFamily(Family employee);

    void deleteFamily(String id);
}
