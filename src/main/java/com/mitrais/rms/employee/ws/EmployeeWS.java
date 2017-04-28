package com.mitrais.rms.employee.ws;

/**
 * Created by made_sudarsana on 4/27/2017.
 */

import com.mitrais.rms.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import com.mitrais.rms.common.model.ResponseREST;
import com.mitrais.rms.employee.dao.EmployeeRepository;
import com.mitrais.rms.employee.model.Employee;

@RestController
@RequestMapping("/api/employeews")
public class EmployeeWS {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/")
    public ResponseREST getAllEmployee(Pageable pageable) {
        Iterable<Employee> employees = employeeService.findAllEmployee(pageable);

        ResponseREST response = new ResponseREST();
        response.setData(employees);
        response.setStatus(ResponseREST.SUCCESS);
        return response;
    }

    @GetMapping("/search")
    public ResponseREST searchEmployee(Pageable pageable, @RequestParam("criteria") Employee employee) {
        Iterable<Employee> employees = employeeService.searchEmployee(pageable, employee);

        ResponseREST response = new ResponseREST();
        response.setData(employees);
        response.setStatus(ResponseREST.SUCCESS);
        return response;
    }

    @GetMapping("/{employeeGUID}")
    public ResponseREST getEmployeeByID(@PathVariable("employeeGUID") Long employeeGUID) {
        Employee employee = employeeService.findByID(employeeGUID);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(employee);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }

    @PostMapping("/")
    public ResponseREST saveEmployee(@RequestBody Employee employee) {
        Long ID = employeeService.saveEmployee(employee);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(ID);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }

    @PutMapping("/")
    public ResponseREST updateEmployee(@RequestBody Employee employee) {
        Employee updateEmployee = employeeService.updateEmployee(employee);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(updateEmployee);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }

    @DeleteMapping("/")
    public void deleteEmployee(@RequestBody Long id) {
        employeeService.deleteEmployee(id);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(null);
        responseREST.setStatus(ResponseREST.SUCCESS);
    }
}
