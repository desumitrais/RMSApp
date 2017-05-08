import { combineReducers } from 'redux';
import { employeesReducer, selectedEmployeeReducer, fetcEmployeeReducer } from './employee-list.reducer';
import { employeeFamiliesReducer } from './family-list.reducer';
import { employeeGradesReducer } from './grade-list.reducer';
import { selectedEmployeeTabReducer } from './employee-tab.reducer';
export const appReducer = combineReducers({
    employees: employeesReducer,
    selectedEmployee: selectedEmployeeReducer,
    families: employeeFamiliesReducer,
    grades: employeeGradesReducer,
    selectedEmployeeTab: selectedEmployeeTabReducer,
    fetching : fetcEmployeeReducer
})