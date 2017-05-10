import { employeeReducer } from './employee.reducer';
import { Action } from '../constants/employee.constant';

export const employeesReducer = (state=[], action) => {
  let index;
  switch (action.type) {
    case Action.GET_EMPLOYEE :
      for(var i=0; i<action.payload.length;i++){
        action.payload[i].selected=false;
      }
      return action.payload;
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
    case Action.GET_EMPLOYEE :
      return true
    case Action.CANCEL_FETCH_EMPLOYEES :
      return false 
    default:
      return state
  }
}

export const sortEmployeeReducer = (state=[], action) => {
  switch(action.type) {
    case Action.SET_SORT :
      return action.payload
    default:
      return state
  }
}

export const searchEmployeeReducer = (state=[], action) => {
  switch(action.type) {
    case Action.SET_SEARCH :
      return action.payload
    default:
      return state
  }
}

export const filterEmployeeReducer = (state=[], action) => {
  switch(action.type) {
    case Action.SET_FILTER :
    debugger;
      return action.payload
    default:
      return state
  }
}

export const selectedEmployeeReducer = (state=null, action) => {
   return action.type === Action.SET_SELECTED_EMPLOYEE ? action.payload : state;
}