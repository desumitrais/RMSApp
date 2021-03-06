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

export const createSort = (sort) => {
    let sortString = ``;
    for(let i=0; i<sort.length; i++){
        let comma = i != sort.length -1 ? ',' : '';
        sortString = `${sortString}{'field':'employee.${sort[i].field}','dir':'${sort[i].dir}'}${comma}`;
    }
    return sortString;
}

export const createFilter = (filter) => {
    let filterString = ``;
    for(let i=0; i<filter.length; i++){
        let comma = i != filter.length -1 ? ',' : '';
        filterString = `${filterString}{'field':'employee.${filter[i].field}','operator':'${filter[i].operator}','value':'${filter[i].value}'}${comma}`;
    }
    return filter && filter.length > 0 ?`{'logic':'and', 'filters':[${filterString}]}` : '';
}

export const fetchEmployees = (sort,filter,search) => dispatch => {
    sort = createSort(sort);
    filter= createFilter(filter,search);
    let url = 'http://localhost:8080/api/employeews/search';
    url = sort && sort.length>0 ? `${url}?sorting=`+ encodeURIComponent(`[${sort}]`) : url;
    url = filter && filter.length>0 ? sort && sort.length>0 ? `${url}&filter=` : `${url}?filter=`+ encodeURIComponent(`${filter}`) : url;
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

