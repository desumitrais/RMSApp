export const Action = {
    SET_EDIT_MODE_FAMILY: 'SET_EDIT_MODE_FAMILY',
    GET_SELECTED_FAMILY: 'GET_SELECTED_FAMILY',
    GET_FAMILY : 'GET_FAMILY',
    ADD_FAMILY : 'ADD_FAMILY',
    EDIT_FAMILY : 'EDIT_FAMILY',
    DELETE_FAMILY : 'DELETE_FAMILY',
    FETCH_FAMILY : 'FETCH_FAMILY',
    CANCEL_FETCH_FAMILY : 'CANCEL_FETCH_FAMILY',
    ADD_ERROR: 'ADD_ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR',
    ADD_FAMILY_ROW: 'ADD_FAMILY_ROW',
    DELETE_FAMILY_ROW: 'DELETE_FAMILY_ROW',
}

export const FamilyTypes = [
    { lookupText: 'Husband', lookupValue:1 },
    { lookupText: 'Wife', lookupValue:2 },
    { lookupText: 'Son', lookupValue:3 },
    { lookupText: 'Daughter', lookupValue:4 }
]