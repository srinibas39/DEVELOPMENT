import { combineReducers } from "redux";
import { detailsReducer, reducer, templateReducer } from "./reducer";



export const rootReducer = combineReducers({
    user: reducer,
    template: templateReducer,
    details:detailsReducer,
});
