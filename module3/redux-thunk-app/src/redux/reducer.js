
let initialState={
    loading:null,
    data:[],
    error:null
}

export const fetchReducer=(state=initialState,action)=>{
        switch(action.type){
            case "FETCH":
                return {
                    ...state,loading:true
                }
             case "SUCCESS":
                 return {
                     ...state,data:action.payload,loading:false
                 }   
             case "FAILURE":
                   return {
                       ...state,error:action.payload,loading:false
                   }    

            default:
                return state;
        }
}

