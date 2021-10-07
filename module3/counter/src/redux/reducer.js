

export const countReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;

        case "DECREMENT":
            return state - 1;

        default:
            return state;
    }
}

export const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;

       default:
           return false;     
    }
}