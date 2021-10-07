import { useDispatch, useSelector } from "react-redux";
import { decrementCreator, incrementCreator, logInCreator, logoutCreator } from "./redux/action";


let App = () => {

  let logged = useSelector((state) => {
    return state.logged;
  })
  let count = useSelector((state) => {
    return state.count;
  })

  let dispatch = useDispatch();
  return (
    <>
    <button
    onClick={()=>{

      dispatch(logInCreator())
    }
    }
    >log in</button>
    <button
    onClick={()=>{
      dispatch(logoutCreator())
    }

    }
    >log out</button>
    <br></br>

      {logged?<>
        <button
          onClick={
            (e) => {
              dispatch(incrementCreator(1));
            }
          }
        >+1</button>
        <button
          onClick={
            (e) => {
              dispatch(incrementCreator(10));
            }
          }
        >+10</button>
        <p>{count}</p>

        <button
          onClick={(e) => {
            dispatch(decrementCreator());
          }}
        >-</button>

      </>:""}

    </>



  );
}

export default App;
