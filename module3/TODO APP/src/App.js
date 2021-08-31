import React from 'react';
import "./App.css";
class App extends React.Component{

  state={
    tasks:["make coffee","play game","dancing","karate"],
    currInput:""
  }
  render=()=>{   
    return(
      <div >
        <input
        className="input-box"
         onChange={
          (e)=>{
            this.setState({currInput:e.target.value})
          }  
         } 
         onKeyDown={
           (e)=>{
             if(e.key==="Enter"){

               this.setState({tasks:[...this.state.tasks,this.state.currInput],currInput:""});
               
             }
           }
         }
        value={this.state.currInput}/>

      <ul>
        {
          this.state.tasks.map((element)=>{
             return <li>{element}</li>
          })
        }
      </ul>
      </div>
    )
      
      

    }
}
 export default App;