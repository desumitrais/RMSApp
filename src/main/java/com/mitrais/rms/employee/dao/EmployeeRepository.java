package com.mitrais.rms.employee.dao;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.mitrais.rms.employee.model.Employee;

public interface EmployeeRepository extends PagingAndSortingRepository<Employee, String>, EmployeeCustomRepository {
    
}