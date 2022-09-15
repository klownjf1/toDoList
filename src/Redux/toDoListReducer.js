const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'
const ADD_NEW_TEXT = 'ADD-NEW-TEXT'
const CLEAN_STATE = 'CLEAN-STATE'
const REMOVE_CASE = 'REMOVE-CASE'
const ACTIVATE_EDIT_MODE = 'ACTIVATE-EDIT-MODE'
const ON_CASE_CHANGE = 'ON-CASE-CHANGE'
const DE_ACTIVATE_CHANGE = 'DE-ACTIVATE-CHANGE'


const initialState = {
    inputField: [
        {id: 0, case:'ыы', editMode:false},
    ],
    newText: ' '


}

const toDoListReducer = (state = initialState, action) => {

    return state


}


export const updateNewTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TEXT,
        text: text,
    }
}

export const addNewTextActionCreator = () =>{
    return {
        type: ADD_NEW_TEXT,
    }
}

export const cleanCasesActionCreator = () => {
    return{
        type: CLEAN_STATE,
    }
}


export const removeCaseActionCreator = (id) => {
    return{
        type: REMOVE_CASE,
        id
    }
}

export const activateEditModeActionCreator = (id) => {
    return{
        type: ACTIVATE_EDIT_MODE,
        id:id
    }
}

export const onCaseChangeActionCreator = (id,text) => {

    return{
        type:ON_CASE_CHANGE,
        id,
        text
    }
}

export const deActiveEditModeActionCreator = (id) =>{
    return{
        type: DE_ACTIVATE_CHANGE,
        id,

    }
}


export default toDoListReducer