//functional component
// let MyComp =()=>{
//  return (
//      <div id="MyComp">
//          <h1>This is a hTag</h1>
//          <p>This is a pTag</p>
//          <ul>
//              <li>list 1</li>
//              <li>list 2</li>
//             <li>list 3</li>
//          </ul>
//      </div>
//  )
// }
import React from 'react';
class MyComp extends React.Component{

    state={
        someNumber:2,
    };

    render =()=>{
        return(
            <div >
                <button onClick={
                    ()=>{
                        this.setState({someNumber:this.state.someNumber+1})
                    }
                }>{"Increment"}</button>
                <button onClick={
                    ()=>[
                        this.setState({someNumber:this.state.someNumber-1})
                    ]
                }>{"Increment"}</button>
                <div>{this.state.someNumber}</div>
            </div>
        )
    }
}

export default MyComp;
