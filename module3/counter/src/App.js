import { useDispatch, useSelector } from "react-redux";
import { decrementCreator, incrementCreator } from "./redux/action";


let App = () => {

  let state = useSelector((state) => {
    return state;
  })

  let dispatch = useDispatch();
  return (
    <>
      <button
        onClick={
          (e) => {
            dispatch(incrementCreator());
          }
        }
      >+</button>
      <p>{state}</p>

      <button
        onClick={(e) => {
          dispatch(decrementCreator());
        }}
      >-</button>

    </>

  );
}

export default App;
