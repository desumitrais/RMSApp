import { Action } from '../constants/family.constant';

export const addError = (message) => ({
    type: Action.ADD_ERROR,
    payload: message
});

export const clearError = (index) => ({
    type: Action.CLEAR_ERROR,
    payload: index
});

export const setEditMode = (familyId, isEdit) => ({
    type: Action.SET_EDIT_MODE_FAMILY,
    payload: {
        id: familyId,
        isEdit: isEdit
    }
});

export const addNewFamilyRow = () => ({
    type: Action.ADD_FAMILY_ROW
});

export const deleteUnsavedFamilyRow = (familyId) => ({
    type: Action.DELETE_FAMILY_ROW,
    payload: familyId
});

export const fetchFamilyList = (employeeGuid) => dispatch => {
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

export const updateFamily = (family) => dispatch => {
    let url = `http://localhost:8080/api/familyws/`;
    fetch(url, {
        method: 'put',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(family)
    })
    .then(response => response.json())
    .then(response => {
        dispatch(setEditMode(response.data.id, false));
        dispatch(fetchFamilyList(response.data.employeeGUID));
    })
    .catch(error => {
        dispatch(addError(error.message))
    })
}

export const deleteFamily = (employeeGUID, familyId) => dispatch => {
    debugger;
    let url = `http://localhost:8080/api/familyws/${familyId}`;
    fetch(url, {
        method: 'delete'
    })
    .then(response => response.json())
    .then(response => {
        debugger;
        dispatch(fetchFamilyList(employeeGUID));
    })
    .catch(error => {
        dispatch(addError(error.message))
    })
}
