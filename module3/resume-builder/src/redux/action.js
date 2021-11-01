export const  userCreator=(user)=>{
     return{
         type:"SET_USER",
         payload:user,
     }
}
export const templateCreator=(code)=>{
    return{
        type:"SET_TEMPLATE",
        payload:code,
    }
}