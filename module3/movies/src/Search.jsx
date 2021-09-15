import React from "react";

let Search = (props) => {
  return (
    <>
      <p class="text-start m-4 ">{`Showing ${props.movies.length} movies from database.`}</p>
      <button type="button" class="btn btn-primary m-4 mt-0">
        New
      </button>
      <div class="input-group flex-nowrap m-4 mt-0">
        <div class="row">
          <div class="col">
            <input 
              onChange={(e)=>{
                  props.updateSearch(e.currentTarget.value)
              }}
              type="text"
              class="form-control "
              placeholder="Search.."
              aria-label="Search.."
              aria-describedby="addon-wrapping"
              value={props.search}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
