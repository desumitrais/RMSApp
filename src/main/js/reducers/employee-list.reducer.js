import { employeeReducer } from './employee.reducer';
import { Action } from '../constants/employee.constant';

export const employeesReducer = (state=[], action) => {
  let index;
  switch (action.type) {
    case Action.GET_EMPLOYEE :
    debugger; 
    let test;
    for(let i=0; i<action.payload.length; i++){
      test.push(employeeReducer(undefined, action))
    }
      return test
    case Action.ADD_EMPLOYEE :
      return [
        ...state,
        employeeReducer(undefined, action)
      ]
    case Action.EDIT_EMPLOYEE :
      if(action.payload.id === null || typeof action.payload.id === "undefined"){
        return state;
      }
      index = state.findIndex((obj) =>  obj.id === action.payload.id);
      return [
        ...state.slice(0,index),
        employeeReducer(undefined, action),
        ...state.slice(index+1)
      ];

    case Action.DELETE_EMPLOYEE :
      if(action.payload.id === null || typeof action.payload.id === "undefined"){
        return state;
      }
      index = state.findIndex((obj) =>  obj.id === action.payload.id);
      if(index === null || typeof action.payload.id === "undefined"){
        return state;
      }
      return [
              ...state.slice(0,index),
              ...state.slice(index+1)
             ];
    default : 
      return state
  }
}

export const fetcEmployeeReducer = (state=false, action) => {
  switch(action.type) {
    case Action.FETCH_EMPLOYEES :
      return true
    case Action.CANCEL_FETCH_EMPLOYEES :
      return false 
    default:
      return state
  }
}