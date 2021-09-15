import React from "react";
import Pagination from "./Pagination";
import "./Table.css";

class Table extends React.Component{

   state={
     currPage:1
   }
   handlePagination=(page)=>{
      this.setState({currPage:page});
      
   }

  render=()=>{

       
    
    let selectedFilter = this.props.selectedFilter;
    let allMovies = this.props.movies;
    
    
      let filteredMovies = allMovies.filter((el) => {
        if (selectedFilter === "Genre") {
          return el;
        } else if (selectedFilter === el.genre.name) {
          return el;
        }
      });
      filteredMovies=filteredMovies.filter((el)=>{
          return el.title.toLowerCase().includes(this.props.search.toLowerCase())
      })
      // 0: {_id: '5b21ca3eeb7f6fbccd471815', title: 'Terminator', genre: {…}, numberInStock: 6, dailyRentalRate: 2.5}
      let noOfPages=Math.ceil(filteredMovies.length/4);
      let startIdx=(this.state.currPage-1)*4;
      let endIdx=Math.min(filteredMovies.length,this.state.currPage*4);
      
      let paginationFilter = filteredMovies.slice(startIdx, endIdx);
     





      
      
    
    return (
      <div class="row">
        <div class="col-10">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {paginationFilter.map((el) => {
                return (
                  <tr key={el._id}>
                    <td>{el.title}</td>
                    <td>{el.genre.name}</td>
                    <td>{el.numberInStock}</td>
                    <td>{el.dailyRentalRate}</td>
                    <td onClick={(e)=>{
                          this.props.handleToggle(el._id)
                    }}>
               
                      {el.liked ? (
                        <span class="material-icons-outlined">favorite</span>
                      ) : (
                        <span class="material-icons-outlined">favorite_border</span>
                      )}
                    </td>
                    <td>
                      <button 
                       onClick={(e)=>{
                          this.props.deleteMovies(el._id)
                       }}
                       className="delete">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination 
         handlePagination={this.handlePagination}
        currPage={this.state.currPage}
        noOfPages={noOfPages}/>
      </div>
    );
  }
}

export default Table;
