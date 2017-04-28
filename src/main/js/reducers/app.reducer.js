import { combineReducers } from 'redux';
import { employeesReducer,fetcEmployeeReducer } from './employee-list.reducer';
export const appReducer = combineReducers({
    employees: employeesReducer,
    fetching : fetcEmployeeReducer
})