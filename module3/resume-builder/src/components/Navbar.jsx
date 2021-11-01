import { Link } from "react-router-dom";

let Navbar=()=>{
    return(
      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">ResumeBuilder</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    </div>
  </div>
</nav>
      </>
    )
}

export default Navbar;