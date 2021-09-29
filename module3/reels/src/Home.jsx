import React, { useContext } from "react";
import { Redirect } from "react-router";
import {authContext} from "./AuthProvider";
import {auth} from "./firebase";
import "./Home.css"
import Videocard from"./Videocard"

let Home=()=>{

   let user=useContext(authContext)
    return(
        <>
        {user?"":<Redirect to="/Login"/>}
        <div className="video-container">
            <Videocard/>
            
        </div>
        <button className="btn-logout"
        onClick={
            (e)=>{
               auth.signOut();
            }
        }
        >Logout</button>
        </>
    )
}

export default Home;