import { Action } from '../constants/family.constant';

export const addError = (message) => ({
    type: Action.ADD_ERROR,
    payload: message
});

export const clearError = (index) => ({
    type: Action.CLEAR_ERROR,
    payload: index
});

export const fetchFamilyList = (employeeGuid) => dispatch => {
    debugger;
    let url = `http://localhost:8080/api/familyws/${employeeGuid}`;
    fetch(url)
    .then(response => response.json())
    .then(familyList => {
        dispatch({
            type: Action.GET_FAMILY,
            payload: familyList.data
        })
        
    })
    .catch(error => {
        dispatch(addError(error.message))
        dispatch({
            type: Action.CANCEL_FETCH_FAMILY
        })

    })
}
