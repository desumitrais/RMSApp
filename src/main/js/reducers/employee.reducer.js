import { Action } from '../constants/employee.constant';
export const employeeReducer = (state, action) => {
    let payload = action.payload
    switch (action.type) {
        case Action.ADD_EMPLOYEE:
            return {
                id: payload.id,
                firstName : payload.firstName,
                lastName : payload.lastName,
                description : payload.description,
                genderID : payload.genderID,
                dob : payload.dob,
                maritalStatusID : payload.maritalStatusID,
                nationalityID : payload.nationalityID,
                statusID : payload.statusID,
                subDivisionID : payload.subDivisionID,
                divisionID : payload.divisionID,
                suspendDate : payload.suspendDate,
                hireDate : payload.hireDate,
                gradeID : payload.gradeID,
                email : payload.email,
                selected: false
            }
        case Action.SET_SELECTED_EMPLOYEE:
            return {
                id: state.id,
                firstName : state.firstName,
                lastName : state.lastName,
                description : state.description,
                genderID : state.genderID,
                dob : state.dob,
                maritalStatusID : state.maritalStatusID,
                nationalityID : state.nationalityID,
                statusID : state.statusID,
                subDivisionID : state.subDivisionID,
                divisionID : state.divisionID,
                suspendDate : state.suspendDate,
                hireDate : state.hireDate,
                gradeID : state.gradeID,
                email : state.email,
                selected: true
            }
        default : 
            return state
    }
}
