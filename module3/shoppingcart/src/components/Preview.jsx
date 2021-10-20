import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCartCreator } from "../redux/action";
import "./Preview.css"
let Preview=()=>{ 
     let dispatch=useDispatch()
    let {id}=useParams();
    let state=useSelector((state)=>state)
    let el=state[id];
    return(
        <div className="preview-container">
            <div className="preview-img-container">
                <img src={el.img}></img>
            </div>
            <div className="preview-listing">
                <h1>{el.name}</h1>
                <p>{el.description}</p>
                <button
                onClick={(e)=>{
                  dispatch(addToCartCreator(el.id))
                }}
                >Add to cart</button>
            </div>
        </div>
    )
}

export default Preview;