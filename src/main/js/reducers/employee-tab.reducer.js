import { Action } from '../constants/employee.constant';
export const selectedEmployeeTabReducer = (state="detail", action) => {
   return action.type === Action.SET_SELECTED_TAB ? action.payload : state;
}