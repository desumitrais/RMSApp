import { combineReducers } from 'redux';
import { employeesReducer, selectedEmployeeReducer, fetcEmployeeReducer } from './employee-list.reducer';
export const appReducer = combineReducers({
    employees: employeesReducer,
    selectedEmployee: selectedEmployeeReducer,
    fetching : fetcEmployeeReducer
})