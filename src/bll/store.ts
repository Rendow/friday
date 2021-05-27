import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { firstReducer } from "./firstReducer";

const reducers = combineReducers({
    reducer: firstReducer,

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>