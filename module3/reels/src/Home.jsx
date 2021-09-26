import React, { useContext } from "react";
import { Redirect } from "react-router";
import {authContext} from "./AuthProvider";

let Home=()=>{

   let user=useContext(authContext)
    return(
        <>
        {user?"":<Redirect to="/Login"/>}
        <h1>Home</h1>
        </>
    )
}

export default Home;