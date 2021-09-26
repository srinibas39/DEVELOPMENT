import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
// import Nav from "./Nav";
import Login from "./Login";
import Home from "./Home";
import AuthProvider from "./AuthProvider";

let App=()=> {
    
  return(
    <AuthProvider>

    <Router>
      {/* <Nav/> */}
       <Switch>
        <Route exact path="/Home">
            <Home/>
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>

       </Switch>


    </Router>
    </AuthProvider>
  )
  
}

export default App;
