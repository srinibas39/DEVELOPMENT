import React from "react";
import {context} from "./A";
import { useContext } from "react";



let D=()=>{
   let contextValue=useContext(context)
    return(
        <div>
            <p>{contextValue.count}</p>
           <button
           onClick={
               (e)=>{
                   contextValue.setCount(contextValue.count+1)
                   
               }
           }>+</button>
        </div>
    )
}

export default D;