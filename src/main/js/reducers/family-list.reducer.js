import { familyReducer } from './family.reducer';
import { Action } from '../constants/family.constant';


export const employeeFamiliesReducer = (state={}, action) => {
  switch (action.type) {
    case Action.GET_FAMILY :
      for(var i=0; i<action.payload.length;i++){
        action.payload[i].editMode=false;
      }
      return action.payload;
    case Action.SET_EDIT_MODE_FAMILY :
      let index = state.findIndex((obj) =>  obj.id === action.payload.id);
      let obj = state.find((obj) =>  obj.id === action.payload.id);
      obj.editMode = action.payload.isEdit;
      return [
        ...state.slice(0,index),
        obj,
        ...state.slice(index+1)
      ];
    default : 
      return state
  }
}