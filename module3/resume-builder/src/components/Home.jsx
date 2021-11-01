import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "./firebase";

import "./css/Home.css"
import { useDispatch } from "react-redux";
import { templateCreator } from "../redux/action";


let Home=()=>{
    let user=useSelector(state=>state.user);
    let template=useSelector(state=>state.template);
    // console.log(template);
    let history=useHistory();
    let dispatch=useDispatch();
    return(
        <>
        {user?<div className="Home">
              <div className="template-container">
                  <div 
                  onClick={()=>{
                      dispatch(templateCreator("A"));
                      history.push("/preview");
                
                  }}
                  className="template">
                      <img src="/skin1.svg"  />
                  </div>
                  <div 
                  onClick={()=>{
                      dispatch(templateCreator("B"));
                      history.push("/preview");
                  }}
                  className="template">
                      <img src="/skin2.svg" />
                  </div>
                  
              </div>
             <button className="btn-logout btn-primary"
               onClick={()=>{
                   auth.signOut();
               }}
             >Log out</button>
         </div>:<Redirect to="/login"/>}

         
        </>
    )
}

export default Home;