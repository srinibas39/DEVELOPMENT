export const reducer=(state=null,action)=>{
    switch(action.type){
        case "SET_USER":
            return action.payload;
        default:
            return state;
    }
}
export const templateReducer=(state=null,action)=>{
    switch(action.type){
        case "SET_TEMPLATE":
            return action.payload;
        default:
            return state;
    }
}
let initialState={
    email:"",
    password:"",
    fname:"",
    lname:"",
    state:"",
    phn:"",
}
export const detailsReducer=(state=initialState,action)=>{
    switch(action.type){
       case "SET_DETAILS":
           return {...state,...action.payload}
       default:
           return state;
    }
}
