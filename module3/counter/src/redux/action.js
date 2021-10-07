export const incrementCreator=(value)=>{
    return{
        type:"INCREMENT",
        payload:value

    };
}
export const decrementCreator=()=>{
    return{
        type:"DECREMENT"
    }
}

export const logInCreator=()=>{
    return{
        type:"LOGIN"
    }
}

export const logoutCreator=()=>{
    return{
        type:"LOGOUT"
    }
}