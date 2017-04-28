package com.mitrais.rms.employee.dao;

import com.mitrais.rms.employee.model.Employee;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
public class EmployeeRepositoryImpl implements EmployeeCustomRepository {
    @Override
    public List<Employee> searchEmployee(Pageable pageable, Employee employee) {
        return null;
    }
}
