import React from "react";
import Pagination from "./Pagination";
import "./Table.css";

let Table = (props) => {
  let selectedFilter = props.selectedFilter;
  let allMovies = props.movies;

  let filteredMovies = allMovies.filter((el) => {
    if (selectedFilter === "Genre") {
      return el;
    } else if (selectedFilter === el.genre.name) {
      return el;
    }
  });
  // 0: {_id: '5b21ca3eeb7f6fbccd471815', title: 'Terminator', genre: {…}, numberInStock: 6, dailyRentalRate: 2.5}
  let paginationFilter = filteredMovies.slice(0, 4);

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
                        props.handleToggle(el._id)
                  }}>
             
                    {el.liked ? (
                      <span class="material-icons-outlined">favorite</span>
                    ) : (
                      <span class="material-icons-outlined">favorite_border</span>
                    )}
                  </td>
                  <td>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};
export default Table;
