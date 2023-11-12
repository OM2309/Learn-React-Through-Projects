import { combineReducers, createStore } from "redux";

import todoReducers from "./redux/reducers/todo-reducers";

const rootReducer = combineReducers({
    todoReducers: todoReducers
})

const store = createStore(rootReducer);

export default store