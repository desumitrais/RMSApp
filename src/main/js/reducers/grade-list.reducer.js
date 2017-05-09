import { Action } from '../constants/grade.constant';

let i = 0;

export const employeeGradesReducer = (state={}, action) => {
    switch (action.type) {
        case Action.GET_GRADE :
            return action.payload;
        default :
            return state
    }

}