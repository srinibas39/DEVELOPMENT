import React from 'react';
import "./App.css";
import List from "./List";
import Input from "./Input"
class App extends React.Component{

  state={
    tasks:["make coffee","play game","dancing","karate"],
    currInput:""
  }
 deleteHandler=(currentTask)=>{
  let currentTasklist=this.state.tasks;
  let filteredTaskList=currentTasklist.filter((element)=>{
      return element!==currentTask
  })
  this.setState({tasks:filteredTaskList});
 }
 inputChangeHandler=(value)=>{
   this.setState({currInput:value})
 }
 inputKeyHandler=()=>{
  this.setState({tasks:[...this.state.tasks,this.state.currInput],currInput:""});
 }
 
  render=()=>{   
    return(
      <div >

      <Input inputChangeHandler={this.inputChangeHandler} inputKeyHandler={this.inputKeyHandler}
      value={this.state.currInput}/>
        {/* <input
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
        value={this.state.currInput}/> */}


      {/* <ul>
        {
          this.state.tasks.map((element)=>{
             return <li>{element} <button
             onClick={(e)=>{
               let filteredTasks=this.state.tasks.filter(ele=>{
                return ele!==element

              })
              this.setState({tasks:filteredTasks})
             }}
             >Delete</button></li>
          })
        }
      </ul> */}
      <List tasks={this.state.tasks} deleteTask={this.deleteHandler}/>
      </div>
    )
      
      

    }
}
 export default App;