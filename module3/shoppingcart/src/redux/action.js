import "./constants"

export const addToCartCreator=(id)=>{
    return{
        
        type:ADD_TO_CART,
        payload:id
    }

}

export const removeFromCartCreatot=(id)=>{

    return{
        type:REMOVE_FROM_CART,
        payload:id
    }

}