import { TODO_SEARCHED, 
         TODO_CLEAR,
         CHANGE_DESCRIPTION } from '../constants/actionTypes';     
         

const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_DESCRIPTION:
            return { ...state, description: action.payload }
        case TODO_SEARCHED:
            return { ...state, list: action.payload }
        case TODO_CLEAR:
            return { ...state, description: '' }
        default:
            return state
    }
}