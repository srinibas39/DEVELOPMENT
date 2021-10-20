import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFromCartCreator } from "../redux/action";

let Cart=()=>{
    let dispatch=useDispatch();
    let state=useSelector((state)=>state)
    let filteredArr=state.filter((el)=>{
      return el.qty>0;
    })
    // console.log(filteredArr);
    let total=0;
    return(
        <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">product Name</th>
      <th scope="col">Qty</th>
      <th scope="col">price</th>
      <th scope="col">Amount</th>
      <th scope="col"> </th>

    </tr>
  </thead>
  <tbody>

    {
      filteredArr.map((el,index)=>{
          total+=(el.price*el.qty)
          return <tr>
          <th scope="row">{index}</th>
          <td>{el.name}</td>
          <td>{el.qty}</td>
          <td>{el.price}</td>
          <td>{el.price*el.qty}</td>
          <td><button 
          onClick={()=>{
            dispatch(removeFromCartCreator(el.id))
          }}
          >Remove</button></td>
        </tr>
      })
    }
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>{total>0?total:""}</td>
    </tr>
    
  
  </tbody>
</table>
    </>

    )
    
}

export default Cart;