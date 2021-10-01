import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import {authContext} from "./AuthProvider";
import {auth,firestore,storage} from "./firebase";
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

          <input
           onChange={(e)=>{
               let videoobj=e.target.files[0];
               console.log(videoobj);
               let {name,size,type}=videoobj;
                
               size=size/1000000;//converting from mb to bytes
               if(size>10){
                   return;
               }
               type=type.split("/")[0];
               if(type!="video"){
                   return;
               }

               let uploadTask=storage.ref(`/posts/${user.uid}/${Date.now()+"-"+name}`).put(videoobj);
               
               uploadTask.on("state_changed",null,null,()=>{
                   console.log("file was uploaded");
                   
                   uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                       console.log(url);
                   })

               })



           }}
           type="file"/>
        </>
    )
}

export default Home;