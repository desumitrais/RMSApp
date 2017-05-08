import { familyReducer } from './family.reducer';
import { Action } from '../constants/family.constant';
let id = 0;

export const employeeFamiliesReducer = (state={}, action) => {
  switch (action.type) {
    case Action.GET_FAMILY :
      for(var i=0; i<action.payload.length;i++){
        action.payload[i].editMode=false;
        action.payload[i].saved=true;
      }
      return action.payload;
    case Action.SET_EDIT_MODE_FAMILY :
      let index = state.findIndex((obj) =>  obj.id === action.payload.id);
      let obj = state.find((obj) =>  obj.id === action.payload.id);
      return [
        ...state.slice(0,index),
        familyReducer(obj, action),
        ...state.slice(index+1)
      ];
    case Action.ADD_FAMILY_ROW :
      action.payload = {
        id: id++,
        saved: false,
        editMode : true,
        firstName : "",
        lastName : "",
        dob: new Date(),
        familyTypeID: null,
        recordStatusID: 1
      }
      return [
        ...state,
        familyReducer(undefined, action)
      ]
    case Action.DELETE_FAMILY_ROW :
      if(action.payload === null || typeof action.payload === "undefined"){
        return state;
      }
      index = state.findIndex((obj) =>  obj.id === action.payload);
      if(index === null || typeof action.payload === "undefined"){
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

export const fetcFamilyReducer = (state=false, action) => {
  switch(action.type) {
    case Action.GET_FAMILY :
      return true
    case Action.CANCEL_FETCH_FAMILY :
      return false 
    default:
      return state
  }
}