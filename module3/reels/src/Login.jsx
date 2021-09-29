
import React, { useContext } from "react";
import {signInWithGoogle,auth} from "./firebase";
import {authContext} from "./AuthProvider"
import { Redirect } from "react-router";


let Login=()=>{

    let user=useContext(authContext);



    return(
       <>
        {user?<Redirect to="/"/>:""}
        <button
         onClick={(e)=>{
               signInWithGoogle();
         }}
         type="button" class="btn btn-primary m-5">Login with Google</button>
        <button 
        onClick={
            (e)=>{
               auth.signOut();
            }
        }
        type="button" class="btn btn-primary ">Logout</button>
       </>
    )

}

export default Login;