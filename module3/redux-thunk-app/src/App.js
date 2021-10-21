import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/action";

let App=()=>{
  let dispatch=useDispatch();
  let state=useSelector(state=>state);
  console.log(state);
  return(
    <>
     <button
     onClick={()=>{
        dispatch(fetchUsers())
     }}
     >Click me</button>

      
    </>
  )
}

export default App;
