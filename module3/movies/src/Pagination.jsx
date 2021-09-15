import React from "react";

let Pagination=(props)=>{
 
    let pagesList=[];
    for(let i=1;i<=props.noOfPages;i++){
      pagesList.push(i);
    }

 

 
    return(
        <nav aria-label="Page navigation example">
        <ul class="pagination">
           {
             pagesList.map((page)=>{
                 return(
                    <li 
                    onClick={(e)=>{
                      props.handlePagination(page);
                    }}
                    class={`page-item ${props.currPage===page?"active":""}`}><a class="page-link" href="#">{page}</a></li>
                 )
             })
           }
         
         
         
        </ul>
      </nav>
    )

}
export default Pagination;