import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCartCreator } from "../redux/action";
import "./Product.css";

let Product = (props) => {
  let history=useHistory();
  let dispatch=useDispatch();
  return <> 
   <div  className="product">
       <div 
       onClick={
        ()=>{
          history.push(`/preview/${props.data.id}`);
        }
      }
       className="product-img">
         <img src={props.data.img}></img>
       </div>
       <div className="product-button">
         <button
         onClick={()=>{
           dispatch(addToCartCreator(props.data.id))
         }}
         >Add to Cart</button>
       </div>
   </div>
  
  
  </>;
};
export default Product;
