package com.mitrais.rms.employee.ws;

import java.util.List;

import com.mitrais.rms.employee.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mitrais.rms.common.MessageByLocaleService;
import com.mitrais.rms.common.model.ResponseREST;
import com.mitrais.rms.employee.model.Family;
import com.mitrais.rms.employee.service.EmployeeService;
import com.mitrais.rms.employee.service.FamilyService;

/**
 * Created by made_sudarsana on 5/2/2017.
 */
@RestController
@RequestMapping("/api/familyws")
public class FamilyWS {
    @Autowired
    private FamilyService  familyService;

    @Autowired
    EmployeeService        employeeService;

    @Autowired
    MessageByLocaleService messageByLocaleService;

    @GetMapping("/{employeeGUID}")
    public ResponseREST getFamilyByID(@PathVariable("employeeGUID") String employeeGUID) {
        List<Family> families = familyService.searchByEmployee(employeeGUID);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(families);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }

    @PostMapping("/")
    public ResponseREST saveFamily(@RequestBody Family family) {
        ResponseREST responseREST = new ResponseREST();

        Employee employee = employeeService.findByID(family.getEmployeeGUID());

        if (employee != null) {
            family.setEmployee(employee);
            String ID = familyService.saveFamily(family);

            responseREST.setData(ID);
            responseREST.setStatus(ResponseREST.SUCCESS);

        } else {
            responseREST.setData(null);
            responseREST.setStatus(ResponseREST.FAILED);
        }

        return responseREST;
    }

    @PutMapping("/")
    public ResponseREST updateEmployee(@RequestBody Family family) {
        Family updateEmployee = familyService.updateFamily(family);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(updateEmployee);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }

    @DeleteMapping("/{familyGUID}")
    public ResponseREST deleteFamily(@PathVariable("familyGUID") String familyGUID) {
        familyService.deleteFamily(familyGUID);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(null);
        responseREST.setStatus(ResponseREST.SUCCESS);
        return responseREST;
    }
}
