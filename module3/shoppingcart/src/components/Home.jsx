import Product from "./Product";
import "./Home.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
let Home = () => {
  let history = useHistory();
  let state = useSelector((state) => state);
  return (
    <>
      <div className="product-components">
        {
            state.map((el,idx)=>{
                return <Product key={idx} data={el}/>
            })
        }
      </div>
      <button
        onClick={() => {
          history.push("/cart");
        }}
        className="btn-addToCart"
      >
        <span class="material-icons-outlined">shopping_cart</span>
      </button>
    </>
  );
};
export default Home;
