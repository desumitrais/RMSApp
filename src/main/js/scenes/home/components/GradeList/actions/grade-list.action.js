import { URL } from '../../../../../constants/url.constant';
import { Action } from '../constants/grade.constant';

export const addError = (message) => ({
    type: Action.ADD_ERROR,
    payload: message
});

export const fetchGradeList = (employeeGuid) => dispatch => {
    let url = URL.GET_GRADE_URL + employeeGuid;
    fetch(url)
    .then(response => response.json())
    .then(gradeList => {
        dispatch({
            type: Action.GET_GRADE,
            payload: gradeList.data
        })

    })
    .catch(error => {
        dispatch(addError(error.message))
        dispatch({
            type: Action.CANCEL_FETCH_GRADE
        })

    })
}

export const setEditMode = (gradeId, isEdit) => ({
    type: Action.SET_EDIT_MODE_GRADE,
    payload: {
        id: gradeId,
        isEdit: isEdit
    }
});