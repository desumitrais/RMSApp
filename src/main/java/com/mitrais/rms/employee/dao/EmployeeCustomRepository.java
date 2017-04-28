package com.mitrais.rms.employee.dao;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.mitrais.rms.employee.model.Employee;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
public interface EmployeeCustomRepository {
    List<Employee> searchEmployee(Pageable pageable, Employee employee);
}
