package com.mitrais.rms.employee.service;

import com.mitrais.rms.common.SearchParameter;
import com.mitrais.rms.employee.model.Employee;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
public interface EmployeeService {
    Iterable<Employee> findAllEmployee(Pageable pageable);

    Employee findByID(String employeeGUID);

    List<Employee> searchEmployee(SearchParameter searchParameter);

    String saveEmployee(Employee employee);

    Employee updateEmployee(Employee employee);

    void deleteEmployee(String id);

}
