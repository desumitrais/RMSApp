package com.mitrais.rms.employee.ws;

import java.util.List;

import com.mitrais.rms.common.MessageByLocaleService;
import com.mitrais.rms.employee.model.Employee;
import com.mitrais.rms.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mitrais.rms.common.model.ResponseREST;
import com.mitrais.rms.employee.model.GradeHistory;
import com.mitrais.rms.employee.service.GradeHistoryService;

/**
 * Created by made_sudarsana on 5/4/2017.
 */
@RestController
@RequestMapping("/api/gradehistoryws")
public class GradeHistoryWS {

    @Autowired
    GradeHistoryService    gradeHistoryService;

    @Autowired
    EmployeeService        employeeService;

    @Autowired
    MessageByLocaleService messageByLocaleService;

    @GetMapping("/{employeeGUID}")
    public ResponseREST getGradeHistoryByID(@PathVariable("employeeGUID") String employeeGUID) {
        List<GradeHistory> gradeHistories = gradeHistoryService.searchByEmployee(employeeGUID);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(gradeHistories);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }

    @PostMapping("/")
    public ResponseREST saveGradeHistory(@RequestBody GradeHistory gradeHistory) {
        ResponseREST responseREST = new ResponseREST();

        Employee employee = employeeService.findByID(gradeHistory.getEmployeeGUID());

        if (employee != null) {
            gradeHistory.setEmployee(employee);
            String ID = gradeHistoryService.saveGradeHistory(gradeHistory);

            responseREST.setData(ID);
            responseREST.setStatus(ResponseREST.SUCCESS);

        } else {
            String message = messageByLocaleService.getMessage("employee.not.found");
            responseREST.setData(null);
            responseREST.setStatus(ResponseREST.FAILED);
        }

        return responseREST;
    }

    @PutMapping("/")
    public ResponseREST updateGradeHistory(@RequestBody GradeHistory gradeHistory) {
        GradeHistory updateGradeHistory = gradeHistoryService.updateGradeHistory(gradeHistory);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(updateGradeHistory);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }

    @DeleteMapping("/{gradeHistoryGUID}")
    public ResponseREST deleteGradeHistory(@PathVariable("gradeHistoryGUID") String gradeHistoryGUID) {
        gradeHistoryService.deleteGradeHistory(gradeHistoryGUID);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(null);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }
}
