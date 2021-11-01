import { combineReducers } from "redux";
import { reducer, templateReducer } from "./reducer";



export const rootReducer = combineReducers({
    user: reducer,
    template: templateReducer,
});
