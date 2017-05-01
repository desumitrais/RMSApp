package com.mitrais.rms.employee.service;

import com.mitrais.rms.common.RMSConstantsIntf;
import com.mitrais.rms.common.SearchParameter;
import com.mitrais.rms.employee.dao.EmployeeRepository;
import com.mitrais.rms.employee.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeDao;

    @Override
    public Iterable<Employee> findAllEmployee(Pageable pageable) {
        return employeeDao.findAll(pageable);
    }

    @Override
    public Employee findByID(String employeeGUID) {
        return employeeDao.findOne(employeeGUID);
    }

    @Override
    public List<Employee> searchEmployee(SearchParameter searchParameter) {
        return employeeDao.searchEmployee(searchParameter);
    }

    @Override
    public String saveEmployee(Employee employee) {
        employee.setId(UUID.randomUUID().toString());
        employee = employeeDao.save(employee);
        return employee.getId();
    }

    @Override
    public Employee updateEmployee(Employee employee) {
        Employee oriEmployee = employeeDao.findOne(employee.getId());

        if (oriEmployee != null) {
            oriEmployee.setFirstName(employee.getFirstName());
            oriEmployee.setLastName(employee.getLastName());
            oriEmployee.setDescription(employee.getDescription());
            oriEmployee.setGenderID(employee.getGenderID());
            oriEmployee.setDob(employee.getDob());
            oriEmployee.setMaritalStatusID(employee.getMaritalStatusID());
            oriEmployee.setNationalityID(employee.getNationalityID());
            oriEmployee.setStatusID(employee.getStatusID());
            oriEmployee.setSubDivisionID(employee.getSubDivisionID());
            oriEmployee.setDivisionID(employee.getDivisionID());
            oriEmployee.setSuspendDate(employee.getSuspendDate());
            oriEmployee.setHireDate(employee.getHireDate());
            oriEmployee.setGradeID(employee.getGradeID());
            oriEmployee.setEmail(employee.getEmail());

            employeeDao.save(oriEmployee);

            return oriEmployee;

        } else {
            return null;
        }
    }

    @Override
    public void deleteEmployee(String id) {
        Employee oriEmployee = employeeDao.findOne(id);
        if (oriEmployee != null) {
            oriEmployee.setRecordStatusID(RMSConstantsIntf.RecordStatus.DELETE);
            employeeDao.save(oriEmployee);
        }
    }
}
