import { Action } from '../constants/grade.constant';

export const addError = (message) => ({
    type: Action.ADD_ERROR,
    payload: message
});

export const fetchGradeList = (employeeGuid) => dispatch => {
    let url = `http://localhost:8080/api/gradehistoryws/${employeeGuid}`;
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