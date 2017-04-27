package com.mitrais.rms.ws;

/**
 * Created by made_sudarsana on 4/27/2017.
 */

import com.mitrais.rms.dao.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitrais.rms.ResponseREST;
import com.mitrais.rms.model.Employee;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/employeews")
public class EmployeeWS {

    @Autowired
    EmployeeRepository employeeDao;

    @GetMapping("/greeting")
    public ResponseREST getGreeting() {
        Employee employee = new Employee();
        employee.setFirstName("Irfin");
        employee.setLastName("Haycal");

        Employee employee2 = new Employee();
        employee2.setFirstName("Irfin");
        employee2.setLastName("Haycal");

        List<Employee> employees = new ArrayList<>();
        employees.add(employee);
        employees.add(employee2);

        ResponseREST response = new ResponseREST();
        response.setData(employees);
        response.setStatus(ResponseREST.SUCCESS);
        return response;
    }

    @GetMapping("/{employeeGUID}")
    public ResponseREST getEmployeeByID(@PathVariable("employeeGUID") Long employeeGUID) {
        Employee employee = employeeDao.findOne(employeeGUID);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(employee);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }
}
