import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from '../reducers/app.reducer';
import { addEmployee, fetchEmployees } from '../actions/employee-list.action';

const consoleMessages = store => next => action => {
    let result;
    
    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log('previous state', store.getState());

    result = next(action);

    let { employees, selectedEmployee } = store.getState();
    console.log(`current state`, store.getState());
    return result;
}

const storeFactory = (initialState={}) => {
    return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer,initialState)
}

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage(['redux-store'])) : 
    {employees: [], selectedEmployee:{}}


const saveState = () => {
    const state = JSON.stringify(appStore.getState());
    localStorage['redux-state'] = state;
}

const appStore = storeFactory(initialState);

appStore.subscribe(saveState);

export default appStore