import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";


let App=()=>{
    return(
       <Router>
           <Navbar/>
          <Switch>
              <Route exact path="/">
                 <Home/>
              </Route>
              <Route exact path="/login"> 
                  <Login/>
              </Route>
              <Route exact path="/signup">
                   <Signup/>
              </Route>
          </Switch>
       </Router>
    )

}

export default App;