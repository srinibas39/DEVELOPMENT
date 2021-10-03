import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import {authContext} from "./AuthProvider";
import {auth,firestore,storage} from "./firebase";
import "./Home.css"
import Videocard from"./Videocard"

let Home=()=>{


    let [posts,setPosts]=useState([]);
    useEffect(
        ()=>{
         let unsub=firestore.collection("posts").onSnapshot((querySnapshot)=>{
             let docArr=querySnapshot.docs;
            //  console.log(docArr);
            let arr=[];
            for(let i=0;i<docArr.length;i++){
                // console.log(docArr[i].data());
                arr.push({id:docArr[i].id,...docArr[i].data()})
            }

            setPosts(arr);

            return(()=>{
                unsub();
            })
            
          })
        },[]
    )


   let user=useContext(authContext)
    return(
        <>
        {user?"":<Redirect to="/Login"/>}
        <div className="video-container">
           {
               posts.map((el)=>{
                  return <Videocard key={el.id} data={el}/>
               })
           }
            
        </div>
        <button className="btn-logout"
        onClick={
            (e)=>{
               auth.signOut();
            }
        }
        >Logout</button>

          <input
           className="upload-files"
           onChange={(e)=>{
               let videoobj=e.target.files[0];
            //    console.log(videoobj);
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
                    //    console.log(url);


                   firestore.collection("posts").add({name:user.displayName,url,likes:[],comments:[]})  
                   })

               })



           }}
           type="file"/>
        </>
    )
}

export default Home;