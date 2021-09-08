import React from "react";
import Child from "./Child";
class App extends React.Component{

    constructor(props){
        super(props)

        this.state={child:true}
    }

    render=()=>{
        return(
            <div>

                <button
                onClick={
                    (e)=>{
                        if(this.state.child){
                            this.setState({child:false});
                        }
                        else{
                            this.setState({child:true});
                        }

                    }
                }
                
                >Toggle</button>

               {(this.state.child)?<Child/>:""} ;
            </div>
        )

    }

}


export default App;
