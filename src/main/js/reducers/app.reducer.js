import { combineReducers } from 'redux';
import { employeesReducer, selectedEmployeeReducer, fetcEmployeeReducer } from './employee-list.reducer';
import { employeeFamiliesReducer } from './family-list.reducer';
export const appReducer = combineReducers({
    employees: employeesReducer,
    selectedEmployee: selectedEmployeeReducer,
    families: employeeFamiliesReducer,
    fetching : fetcEmployeeReducer
})