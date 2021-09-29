import React, { useEffect } from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
// import Nav from "./Nav";
import Login from "./Login";
import Home from "./Home";
import AuthProvider from "./AuthProvider";
import {firestore} from "./firebase";
let App=()=> {



  // useEffect(
  //   ()=>{
  //     //to store int the database
  //   //  firestore.collection("users").add({body:"hi I am body too"});
   
  //    //to fetch coolection from the firestore
  //      async function f(){
         
  //       //  let querySnapshot= await firestore.collection("users").get();
  //       //  console.log(querySnapshot); //this is my collection
  //       //  for(let i=0;i<querySnapshot.docs.length;i++){
  //       //           console.log(querySnapshot.docs[i].data());
  //       //  }

  //       // to fetch object from database
  //       // let docRef= firestore.collection("users").doc("EfEAmpCOZMGCl3GqGoRJ");
  //       // let docSnapshot=await docRef.get();
  //       // console.log(docSnapshot.data());
  //       //console.log(docSnapshot.id);
        
  //       //If ID is incorrect,it will not give error it will create a fake object which you can find out=>exist.
  //       // let docRef= firestore.collection("users").doc("EfEAmpCOZMGCl3GqGssS");
  //       // let docSnapshot=await docRef.get();
  //       // console.log(docSnapshot.exists);
  //      }
  //      f();

  //   },[]
  //   )
    
  return(

    // <h1>App</h1>
    <AuthProvider>

    <Router>
       {/* <Nav/> */}
       <Switch>
        <Route exact path="/">
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
