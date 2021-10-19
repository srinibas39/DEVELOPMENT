import { useHistory } from "react-router";
import "./Product.css";

let Product = (props) => {
  let history=useHistory();
  return <> 
   <div onClick={
     ()=>{
       history.push(`/preview/${props.data.id}`);
     }
   } className="product">
       <div className="product-img">
         <img src={props.data.img}></img>
       </div>
       <div className="product-button">
         <button>Add to Cart</button>
       </div>
   </div>
  
  
  </>;
};
export default Product;
