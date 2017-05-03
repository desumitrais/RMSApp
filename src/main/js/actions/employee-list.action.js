import { Action } from '../constants/employee.constant';
let employeeId = 0;

export const addEmployee = (employee) => ({
    type: Action.ADD_EMPLOYEE,
    payload: {
        id: employee.id,
        firstName : employee.firstName,
        lastName : employee.lastName,
        description : employee.description,
        genderID : employee.genderID,
        dob : employee.dob,
        maritalStatusID : employee.maritalStatusID,
        nationalityID : employee.nationalityID,
        statusID : employee.statusID,
        subDivisionID : employee.subDivisionID,
        divisionID : employee.divisionID,
        suspendDate : employee.suspendDate,
        hireDate : employee.hireDate,
        gradeID : employee.gradeID,
        email : employee.email
    }
});

export const editEmployee = (employee) => ({
    type: Action.EDIT_EMPLOYEE,
    payload: {
        id: employee.id,
        firstName : employee.firstName,
        lastName : employee.lastName,
        description : employee.description,
        genderID : employee.genderID,
        dob : employee.dob,
        maritalStatusID : employee.maritalStatusID,
        nationalityID : employee.nationalityID,
        statusID : employee.statusID,
        subDivisionID : employee.subDivisionID,
        divisionID : employee.divisionID,
        suspendDate : employee.suspendDate,
        hireDate : employee.hireDate,
        gradeID : employee.gradeID,
        email : employee.email
    }
});

export const deleteEmployee = (employee) => ({
    type: Action.DELETE_EMPLOYEE,
    payload: {
        id: employee.id,
        firstName : employee.firstName,
        lastName : employee.lastName,
        description : employee.description,
        genderID : employee.genderID,
        dob : employee.dob,
        maritalStatusID : employee.maritalStatusID,
        nationalityID : employee.nationalityID,
        statusID : employee.statusID,
        subDivisionID : employee.subDivisionID,
        divisionID : employee.divisionID,
        suspendDate : employee.suspendDate,
        hireDate : employee.hireDate,
        gradeID : employee.gradeID,
        email : employee.email
    }
});

export const addError = (message) => ({
    type: Action.ADD_ERROR,
    payload: message
});

export const clearError = (index) => ({
    type: Action.CLEAR_ERROR,
    payload: index
});

export const fetchEmployees = () => dispatch => {
    let url = 'http://localhost:8080/api/employeews/';
    fetch(url)
    .then(response => response.json())
    .then(employees => {
        dispatch({
            type: Action.GET_EMPLOYEE,
            payload: employees.data
        })
        
    })
    .catch(error => {
        dispatch(addError(error.message))
        dispatch({
            type: Action.CANCEL_FETCH_EMPLOYEES
        })

    })
}

