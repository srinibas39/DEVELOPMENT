import react from "react"

let Input=(props)=>{
    return(
        <input
        className="input-box"
         onChange={
          (e)=>{
           props.inputChangeHandler(e.target.value);
          }  
         } 
         onKeyDown={
           (e)=>{
             if(e.key==="Enter"){

              props.inputKeyHandler()
               
             }
           }
         }
        value={props.value}/>
    )
}

export default Input;