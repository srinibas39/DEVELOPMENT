import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Home from "./Home";

let App=()=> {
    
  return(
    <Router>
      <Nav/>
       <Switch>
        <Route exact path="/Home">
            <Home/>
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>

       </Switch>


    </Router>
  )
  
}

export default App;
