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
                email : payload.email
            }
        default : 
            return state
    }
}
