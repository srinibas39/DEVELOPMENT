import Navbar from "./components/Navbar";
import Home from "./components/Home";
 import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

let App=()=>{
  return(
    <Router>
      <Navbar/>
       <Switch>
         <Route path="/">
           <Home/>
         </Route>
       </Switch>

    </Router>
  )
}

export default App;
