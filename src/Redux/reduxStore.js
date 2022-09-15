import {combineReducers, createStore} from "redux";
import toDoListReducer from './toDoListReducer'

let reducers = combineReducers({
    toDoList: toDoListReducer,
})



let store = createStore(reducers)

export default store