package com.mitrais.rms.employee.service;

import java.util.List;

import com.mitrais.rms.employee.model.GradeHistory;

/**
 * Created by made_sudarsana on 5/4/2017.
 */
public interface GradeHistoryService {
    List<GradeHistory> searchByEmployee(String employeeGUID);

    String saveGradeHistory(GradeHistory gradeHistory);

    GradeHistory updateGradeHistory(GradeHistory gardeHistory);

    void deleteGradeHistory(String id);
}
