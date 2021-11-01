import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "./firebase";

let Signup = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmpassword, setConfirmpassword] = useState("");
    let user=useSelector(state=>state.user);
    let history = useHistory();
    return (
        <>
     {
         user?<Redirect to="/"/>: <div className="row m-5 ">
         <div className="col-4"></div>
         <div className="col-4">
         <h1>Sign up</h1>
           <form>
             <div class="mb-3">
               <label for="exampleInputEmail1" class="form-label">
                 Email address
               </label>
               <input
                 value={email}
                 onChange={(e) => {
                   setEmail(e.currentTarget.value);
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
                 onChange={(e) => {
                   setPassword(e.currentTarget.value);
                 }}
                 type="password"
                 class="form-control"
                 id="exampleInputPassword1"
               />
             </div>
             <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">
                 Confirm Password
               </label>
               <input
                 value={confirmpassword}
                 onChange={(e) => {
                   setConfirmpassword(e.currentTarget.value);
                 }}
                 type="password"
                 class="form-control"
                 id="exampleInputPassword1"
               />
             </div>
   
             <button
               onClick={(e) => {
                   e.preventDefault();
                 if (password === confirmpassword)
                   auth.createUserWithEmailAndPassword(email, password);
               }}
               type="submit"
               class="btn btn-primary"
             >
               Sign up
             </button>
             <br />
             <br />
             <button
               onClick={() => {
                 history.push("/login");
               }}
               type="submit"
               class="btn btn-primary"
             >
               Log in
             </button>
           </form>
         </div>
       </div>
     }
    
    
     </>
    
  );
};

export default Signup;
