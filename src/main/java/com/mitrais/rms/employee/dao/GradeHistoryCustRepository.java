package com.mitrais.rms.employee.dao;

import java.util.List;

import com.mitrais.rms.employee.model.GradeHistory;

/**
 * Created by made_sudarsana on 5/4/2017.
 */
public interface GradeHistoryCustRepository {
    List<GradeHistory> searchByEmployee(String employeeGUID);
}
