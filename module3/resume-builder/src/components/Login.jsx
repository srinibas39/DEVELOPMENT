import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "./firebase";

let Login = () => {
    let user=useSelector(state=>state.user)
    let history=useHistory();
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    return (
        <>
      {
          user?<Redirect to="/"/>: <div className="row m-5 p-5">
          <div className="col-4"></div>
          <div className="col-4">
              <h1>Log in</h1>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.currentTarget.value)
                  }}
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e)=>{
                      setPassword(e.currentTarget.value)
                  }}
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              
              <button
              onClick={(e)=>{
                  e.preventDefault();
                  auth.signInWithEmailAndPassword(email,password);
              }}
               type="submit" class="btn btn-primary">
                Log in
              </button>
              <br/>
              <br/>
              <button
               onClick={()=>{
                   history.push("/signup")
               }}
               type="submit" class="btn btn-primary">
                Sign up
              </button>
            </form>
          </div>
        </div>
      }
     
      </>  
    
  );
};

export default Login;
