import { combineReducers } from 'redux';
import { employeesReducer, selectedEmployeeReducer, fetcEmployeeReducer } from './employee-list.reducer';
import { employeeFamiliesReducer } from './family-list.reducer';
import { selectedEmployeeTabReducer } from './employee-tab.reducer';
export const appReducer = combineReducers({
    employees: employeesReducer,
    selectedEmployee: selectedEmployeeReducer,
    families: employeeFamiliesReducer,
    selectedEmployeeTab: selectedEmployeeTabReducer,
    fetching : fetcEmployeeReducer
})