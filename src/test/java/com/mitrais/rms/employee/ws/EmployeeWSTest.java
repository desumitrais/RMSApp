package com.mitrais.rms.employee.ws;

import com.mitrais.rms.common.SearchParameter;
import com.mitrais.rms.employee.model.Employee;
import com.mitrais.rms.employee.service.EmployeeService;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.verify;

/**
 * Created by Desu on 5/1/2017.
 */

@RunWith(MockitoJUnitRunner.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class EmployeeWSTest {

    @Mock
    private EmployeeService employeeService;

    @Mock
    private Pageable pageable;

    @Mock
    private PageRequest pageRequest;

    @InjectMocks
    private EmployeeWS employeeWS;

    @Test
    public void test_01_getAllEmployee_no_exception() {
        Pageable pageable = new PageRequest(1, 1, null);
        employeeWS.getAllEmployee(pageable);
        verify(employeeService).findAllEmployee(any(Pageable.class));
    }

    @Test
    public void test_02_searchEmployee_no_exception() {
        Pageable pageable = new PageRequest(1, 1, null);
        String filter = "{\"field\": \"employee.firstName\",\"operator\": \"eq\",\"value\": \"Albertus\"}";
        String sort = "[{\"field\":\"employee.firstName\",\"dir\":\"desc\"}]";

        employeeWS.searchEmployee(pageable, filter, sort);
        verify(employeeService).searchEmployee(any(SearchParameter.class));
    }

    @Test
    public void test_03_getEmployeeByID_no_exception() {
        employeeWS.getEmployeeByID("dummy");
        verify(employeeService).findByID(anyString());
    }

    @Test
    public void test_04_saveEmployee_no_exception() {
        Employee dummy = new Employee();
        dummy.setId(null);
        dummy.setFirstName("dummy");
        dummy.setLastName("dummy");

        employeeWS.saveEmployee(dummy);
        verify(employeeService).saveEmployee(any(Employee.class));
    }

    @Test
    public void test_05_updateEmployee_no_exception() {
        Employee dummy = new Employee();
        dummy.setId(null);
        dummy.setFirstName("dummy");
        dummy.setLastName("dummy");

        employeeWS.updateEmployee(dummy);
        verify(employeeService).updateEmployee(any(Employee.class));
    }

    @Test
    public void test_06_deleteEmployee_no_exception() {
        Employee dummy = new Employee();
        dummy.setId(null);
        dummy.setFirstName("dummy");
        dummy.setLastName("dummy");

        employeeWS.deleteEmployee("dummy");
        verify(employeeService).deleteEmployee(anyString());
    }
}
