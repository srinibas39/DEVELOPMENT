import React from "react";

let NavBar=()=>{
  return(
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MovieRentals</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Customers</a>
          <a class="nav-link" href="#">Rentals</a>
          <a class="nav-link" href="#">Login</a>
        </div>
      </div>
    </div>
  </nav>
  )
}
export default NavBar;