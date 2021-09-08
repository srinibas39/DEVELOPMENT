import React from "react";
class Child extends React.Component{

    constructor(props){
        super(props)

        this.state={on:false};
        console.log("constructor is called");
    }

    componentDidMount(){
        console.log("component did mount is called");
    }
    componentDidUpdate(){
        console.log("component did update is called");
    }
    
    componentWillUnmount(){
        console.log("component eill Unmount is called");
    }


   render=()=>{
       return(
           <div>
               <button onClick={(e)=>{
                  
                  if(this.state.on){
                      this.setState({on:false});
                  }
                  else{
                      this.setState({on:true});
                  }
               }}>click</button>
          
               {console.log("render is called")}
           </div>
           
       )
     
   }

}


export default Child;
