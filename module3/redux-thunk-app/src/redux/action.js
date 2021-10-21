
export const fetchCreator = () => {
    return {
        type: "FETCH"
    }
};

export const successCreator = (data) => {
    return {
        type: "SUCCESS",
        payload: data
    }
};

export const failureCreator = (error) => {
    return {
        type: "FAILURE",
        payload: error
    }
};

//middleware action=>return function

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchCreator());

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => {
                dispatch(successCreator(json))
            }).catch(err => {
                dispatch(failureCreator(err))
            })
    }
}