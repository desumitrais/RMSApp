import { Action } from '../constants/family.constant';
export const familyReducer = (state, action) => {
    let payload = action.payload
    switch (action.type) {
        case Action.ADD_FAMILY_ROW:
            return {
                ...action.payload,
                editMode: true
            }
        case Action.SET_EDIT_MODE_FAMILY:
            return {
                ...action.state,
                editMode: action.payload.isEdit
            }
        default : 
            return state
    }
}
