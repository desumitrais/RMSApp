import { Action } from '../scenes/home/components/GradeList/constants/grade.constant';
import { gradeReducer } from './grade.reducer';

let i = 0;

export const employeeGradesReducer = (state={}, action) => {
    switch (action.type) {
        case Action.GET_GRADE :
            return action.payload;
        case Action.SET_EDIT_MODE_GRADE :
            let index = state.findIndex((obj) =>  obj.id === action.payload.id);
            let obj = state.find((obj) =>  obj.id === action.payload.id);
            return [
                ...state.slice(0,index),
                gradeReducer(obj, action),
                ...state.slice(index+1)
            ];
        default :
            return state
    }

}