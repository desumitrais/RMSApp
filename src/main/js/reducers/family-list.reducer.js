import { familyReducer } from './family.reducer';
import { Action } from '../constants/family.constant';


export const employeeFamiliesReducer = (state={}, action) => {
  switch (action.type) {
    case Action.GET_FAMILY :
    debugger;
      for(var i=0; i<action.payload.length;i++){
        action.payload[i].selected=false;
      }
      return action.payload;
    default : 
      return state
  }
}