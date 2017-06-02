import { addEmployee, editEmployee, deleteEmployee } from '../actions/employee-list.action';
import { employeesReducer } from '../reducers/employee-list.reducer';
import deepFreeze from 'deep-freeze';
import expect from 'expect';

const testAdd = () => {
  const stateBefore = [];
  const action = addEmployee({
    id: 1,
    firstName : "Frodo",
    lastName : "Baggins",
    description : "ring bearer",
    genderID : null,
    dob : null,
    maritalStatusID : null,
    nationalityID : null,
    statusID : null,
    subDivisionID : null,
    divisionID : null,
    suspendDate : null,
    hireDate : null,
    gradeID : null,
    email : null
  });

  const stateAfter = [{
    id: 1,
    firstName : "Frodo",
    lastName : "Baggins",
    description : "ring bearer",
    genderID : null,
    dob : null,
    maritalStatusID : null,
    nationalityID : null,
    statusID : null,
    subDivisionID : null,
    divisionID : null,
    suspendDate : null,
    hireDate : null,
    gradeID : null,
    email : null
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    mediaItemsReducer(stateBefore,action)
  ).toEqual(stateAfter);
}

const testEdit = () => {
  const stateBefore = [
    {
        id: 1,
        firstName : "Frodo",
        lastName : "Baggins",
        description : "ring bearer",
        genderID : null,
        dob : null,
        maritalStatusID : null,
        nationalityID : null,
        statusID : null,
        subDivisionID : null,
        divisionID : null,
        suspendDate : null,
        hireDate : null,
        gradeID : null,
        email : null
    },
    {
        id: 2,
        firstName : "Bilbo",
        lastName : "Baggins",
        description : "burglar",
        genderID : null,
        dob : null,
        maritalStatusID : null,
        nationalityID : null,
        statusID : null,
        subDivisionID : null,
        divisionID : null,
        suspendDate : null,
        hireDate : null,
        gradeID : null,
        email : null
    }
  ];
  const editEmployee = editMediaItem({
        id: 1,
        firstName : "Jack",
        lastName : "Sparrow",
        description : "Pirates",
        genderID : null,
        dob : null,
        maritalStatusID : null,
        nationalityID : null,
        statusID : null,
        subDivisionID : null,
        divisionID : null,
        suspendDate : null,
        hireDate : null,
        gradeID : null,
        email : null
  });
  const stateAfter = [{
        id: 1,
        firstName : "Jack",
        lastName : "Sparrow",
        description : "Pirates",
        genderID : null,
        dob : null,
        maritalStatusID : null,
        nationalityID : null,
        statusID : null,
        subDivisionID : null,
        divisionID : null,
        suspendDate : null,
        hireDate : null,
        gradeID : null,
        email : null
  },{
        id: 2,
        firstName : "Bilbo",
        lastName : "Baggins",
        description : "burglar",
        genderID : null,
        dob : null,
        maritalStatusID : null,
        nationalityID : null,
        statusID : null,
        subDivisionID : null,
        divisionID : null,
        suspendDate : null,
        hireDate : null,
        gradeID : null,
        email : null
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    mediaItemsReducer(stateBefore,action)
  ).toEqual(stateAfter);
}

const testDelete = () => {
  const stateBefore = [
    {
        id: 1,
        firstName : "Frodo",
        lastName : "Baggins",
        description : "ring bearer",
        genderID : null,
        dob : null,
        maritalStatusID : null,
        nationalityID : null,
        statusID : null,
        subDivisionID : null,
        divisionID : null,
        suspendDate : null,
        hireDate : null,
        gradeID : null,
        email : null
    },
    {
        id: 2,
        firstName : "Bilbo",
        lastName : "Baggins",
        description : "burglar",
        genderID : null,
        dob : null,
        maritalStatusID : null,
        nationalityID : null,
        statusID : null,
        subDivisionID : null,
        divisionID : null,
        suspendDate : null,
        hireDate : null,
        gradeID : null,
        email : null
    }
  ];
  const action = deleteEmployee({
        id: 1,
        firstName : "Frodo",
        lastName : "Baggins",
        description : "ring bearer",
        genderID : null,
        dob : null,
        maritalStatusID : null,
        nationalityID : null,
        statusID : null,
        subDivisionID : null,
        divisionID : null,
        suspendDate : null,
        hireDate : null,
        gradeID : null,
        email : null
  });
  const stateAfter = [{
        id: 2,
        firstName : "Bilbo",
        lastName : "Baggins",
        description : "burglar",
        genderID : null,
        dob : null,
        maritalStatusID : null,
        nationalityID : null,
        statusID : null,
        subDivisionID : null,
        divisionID : null,
        suspendDate : null,
        hireDate : null,
        gradeID : null,
        email : null
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    mediaItemsReducer(stateBefore,action)
  ).toEqual(stateAfter);
}

export default runAllEmployeeTest = () => {
    testAdd();
    testEdit();
    testDelete();
    console.log('All Employee List Tests Passed');
}