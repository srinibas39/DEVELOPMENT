import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth, firestore } from "./components/firebase";
import Home from "./components/Home";
import Login from "./components/Login"
import Navbar from "./components/Navbar";
import PreviewData from "./components/previewData";
import Signup from "./components/Signup";
import { userCreator } from "./redux/action";


let App = () => {

    let dispatch=useDispatch();
    useEffect( () => {
        let unsub = auth.onAuthStateChanged(async (user) => {
            //  console.log(user)
            dispatch(userCreator(user))
            if (user) {
                let { uid,email } = user;
                let docRef = firestore.collection("users").doc(uid);
                let docu=await docRef.get();
                if(!docu.exists){
                    docRef.set({
                        email,
                    })
                }

            }
        })

        return () => {
            unsub();
        }
    }, [])

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/preview">
                    <PreviewData/>
                </Route>
            </Switch>
        </Router>
    )

}

export default App;