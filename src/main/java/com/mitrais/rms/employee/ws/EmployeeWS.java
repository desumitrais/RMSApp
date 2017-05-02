package com.mitrais.rms.employee.ws;

/**
 * Created by made_sudarsana on 4/27/2017.
 */

import com.mitrais.rms.common.SearchParameter;
import com.mitrais.rms.common.model.ResponseREST;
import com.mitrais.rms.employee.model.Employee;
import com.mitrais.rms.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api/employeews")
public class EmployeeWS {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/")
    public ResponseREST getAllEmployee(@PageableDefault(size = 20, page = 0) Pageable pageable) {
        Iterable<Employee> employees = employeeService.findAllEmployee(pageable);
        List<Employee> listEmployee = null;

        if(employees != null) {
            listEmployee = StreamSupport.stream(employees.spliterator(), false).collect(Collectors.toList());
        }

        ResponseREST response = new ResponseREST();
        response.setData(listEmployee);
        response.setStatus(ResponseREST.SUCCESS);
        return response;
    }

    @GetMapping("/search")
    public ResponseREST searchEmployee(@PageableDefault(size = 20, page = 0) Pageable pageable, @RequestParam(value = "filter", required = false) String filter, @RequestParam(value = "sorting", required = false) String sort) {
        SearchParameter searchParameter = new SearchParameter(filter, sort, pageable);
        List<Employee>  employees = employeeService.searchEmployee(searchParameter);

        ResponseREST response = new ResponseREST();
        response.setData(employees);
        response.setStatus(ResponseREST.SUCCESS);
        return response;
    }

    @GetMapping("/{employeeGUID}")
    public ResponseREST getEmployeeByID(@PathVariable("employeeGUID") String employeeGUID) {
        Employee employee = employeeService.findByID(employeeGUID);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(employee);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }

    @PostMapping("/")
    public ResponseREST saveEmployee(@RequestBody Employee employee) {
        String ID = employeeService.saveEmployee(employee);

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

    @DeleteMapping("/{employeeGUID}")
    public void deleteEmployee(@PathVariable("employeeGUID") String employeeGUID) {
        employeeService.deleteEmployee(employeeGUID);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(null);
        responseREST.setStatus(ResponseREST.SUCCESS);
    }
}
