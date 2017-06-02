import { Action } from '../scenes/home/components/GradeList/constants/grade.constant';

export const gradeReducer = (state, action) => {
    let payload = action.payload
    switch (action.type) {
        case Action.ADD_GRADE_ROW:
            return {
                ...action.payload,
                editMode: true
            }
        case Action.SET_EDIT_MODE_GRADE:
            return {
                ...state,
                editMode: action.payload.isEdit
            }
        default :
            return state
    }
}
