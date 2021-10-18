import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Preview from "./components/Preview";
 import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

let App=()=>{
  return(
    <Router>
      <Navbar/>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route exact path="/cart">
           <Cart/>
         </Route>
         <Route exact path="/preview">
           <Preview/>
         </Route>
       </Switch>

    </Router>
  )
}

export default App;
