package com.mitrais.rms.employee.service;

import com.mitrais.rms.common.RMSConstantsIntf;
import com.mitrais.rms.common.SearchParameter;
import com.mitrais.rms.common.dao.LookupRepository;
import com.mitrais.rms.common.model.Lookup;
import com.mitrais.rms.employee.dao.EmployeeRepository;
import com.mitrais.rms.employee.model.Employee;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeDao;

    @Autowired
    LookupRepository   lookupRepo;

    @Override
    public List<Employee> findAllEmployee(Pageable pageable) {
        List<Employee> employees = null;

        employees = pageable != null ? (List<Employee>) employeeDao.findAll(pageable)
                : (List<Employee>) employeeDao.findAll();

        return employees;
    }

    @Override
    public Employee findByID(String employeeGUID) {
        return employeeDao.findOne(employeeGUID);
    }

    @Override
    public List<Employee> searchEmployee(SearchParameter searchParameter) {
        List<Employee> employees = employeeDao.searchEmployee(searchParameter);
        List<String> lookupnames = new ArrayList<>();
        lookupnames.add("genderid");
        lookupnames.add("nationalityid");
        lookupnames.add("maritalstatusid");
        lookupnames.add("statusid");
        lookupnames.add("subdivisionid");
        lookupnames.add("divisionid");
        lookupnames.add("gradeid");

        List<Lookup> lookups = lookupRepo.findByLookupNameIn(lookupnames);

        for (Employee employee : employees) {
            employee.setGenderStr(getTextOnLookup(lookups, "genderid", employee.getGenderID()));
            employee.setNationalityStr(getTextOnLookup(lookups, "nationalityid", employee.getNationalityID()));
            employee.setMaritalStatusStr(getTextOnLookup(lookups, "maritalstatusid", employee.getMaritalStatusID()));
            employee.setStatusStr(getTextOnLookup(lookups, "statusid", employee.getStatusID()));
            employee.setSubDivisionStr(getTextOnLookup(lookups, "subdivisionid", employee.getSubDivisionID()));
            employee.setDivisionStr(getTextOnLookup(lookups, "divisionid", employee.getDivisionID()));
            employee.setGradeStr(getTextOnLookup(lookups, "gradeid", employee.getGradeID()));

            employee.setFamilies(null);
            employee.setGradeHistories(null);
        }

        return employees;
    }

    private String getTextOnLookup(List<Lookup> lookups, String lookupName, String lookupCode) {
        Lookup selectedLookup = lookups.stream().filter(lookup -> lookup.getLookupName().equalsIgnoreCase(lookupName))
                .filter(lookup -> lookup.getLookupCode().equalsIgnoreCase(lookupCode)).findFirst().orElse(new Lookup());

        if (selectedLookup != null) {
            return selectedLookup.getLookupText();
        } else {
            return StringUtils.EMPTY;
        }
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
