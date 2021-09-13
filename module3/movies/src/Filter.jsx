import React from "react";


let Filter=(props)=>{
    return( <div class="col-3">
    <ul class="list-group m-4">
        <li class={`list-group-item ${props.selectedFilter=="Genre"?"active":""}`}
        onClick={(e)=>{
            props.setFilter("Genre")
        }}> Genre </li>
        {
            props.genreData.map((el,index)=>{
                 return <li key={index}
                 onClick={(e)=>{
                    props.setFilter(el.name)
                 }}
                 class={`list-group-item ${props.selectedFilter==el.name?"active":""}`}
                 
                 >{el.name}</li>;
            })
        }
    
      </ul>
  </div>)
    
}
export default Filter;