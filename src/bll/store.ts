import {combineReducers, createStore} from "redux";
import { firstReducer } from "./firstReducer";

const reducers = combineReducers({
    reducer: firstReducer,

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>