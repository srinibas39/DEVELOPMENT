import { useSelector } from "react-redux";

let Cart=()=>{

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
          <td>{el.price}</td>
          <td>{el.price*el.qty}</td>
          <td><button >Remove</button></td>
        </tr>
      })
    }
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>{total}</td>
    </tr>
    
  
  </tbody>
</table>
    </>

    )
    
}

export default Cart;