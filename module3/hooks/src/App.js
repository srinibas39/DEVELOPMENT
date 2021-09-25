import React, { useEffect, useState } from "react";


let App=()=>{
  let[count,SetCount]=useState(0);
  // let[process,Setprocess]=useState("running");

  // console.log("This will run multple times");
  
  //   //case 1
  //  useEffect(()=>{
  //    console.log("This function is exexcuted only once");
  //  },[])
  // // case 2
  //  useEffect(()=>{
  //    console.log("2nd case of useEffect");
  //  })
  // // case 3
  // useEffect(()=>{
  //   let arr=process.split("i");
  //   console.log(arr);
  // },[process])

  // clean up case 1'
  // useEffect(()=>{
  //   console.log("useEffect will run");

  //  return(()=>{
  //    console.log("clean up will run")
  //  })
  // })
  
  //clean up case 2
  useEffect(()=>{
    console.log("useEffect is running");

    return(()=>{
      console.log("clean up is running")
    })
  },[])

   
  return(
    <div>
      <button
      onClick={
        (e)=>{
           SetCount(count+1)
        }
      }
      >+</button>
      <p>{count}</p>
      <button
      onClick={
        (e)=>{
           SetCount(count-1);
        }
      }
      >-</button>
    {/* <p>{process}</p>
    <button
    onClick={
      (e)=>{
       Setprocess("stop");
      }
    }
    ></button> */}
    </div>


  )
}

export default App;
