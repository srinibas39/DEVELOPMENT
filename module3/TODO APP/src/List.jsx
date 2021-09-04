import React from "react";

    let List = (props) => {
      return (
        <ul>
          {props.tasks.map((element,index) => {
            return (
              <li key={index}>
                {element}
                { <button
                 onClick={(e)=>{
                    props.deleteTask(element)
                 
                 }}
                 >Delete</button> }
                 
              </li>
            );
          })}
        </ul>
      );
    };
  


export default List;
