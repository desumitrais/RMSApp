package com.mitrais.rms.employee.dao;

import com.mitrais.rms.common.SearchParameter;
import com.mitrais.rms.employee.model.Employee;

import java.util.List;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
public interface EmployeeCustomRepository {
    List<Employee>  searchEmployee(SearchParameter searchParameter);
}
