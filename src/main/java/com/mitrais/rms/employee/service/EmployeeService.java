package com.mitrais.rms.employee.service;

import com.mitrais.rms.employee.model.Employee;
import org.springframework.data.domain.Pageable;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
public interface EmployeeService {
    Iterable<Employee> findAllEmployee(Pageable pageable);

    Employee findByID(Long employeeGUID);

    Iterable<Employee> searchEmployee(Pageable pageable, Employee employee);

    Long saveEmployee(Employee employee);

    Employee updateEmployee(Employee employee);

    void deleteEmployee(Long id);

}
