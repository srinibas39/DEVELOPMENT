import React from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component{
    state={
        movies:[],
        genre:[],
        selectedFilter:"Genre"
    }
    setFilter=(filter)=>{
        this.setState({selectedFilter:filter})
    }
  
    componentDidMount(){

        let f=async ()=>{
            let moviesRes= await fetch("http://localhost:4000/movies");
            let genreRes= await fetch("http://localhost:4000/genre")
            console.log(moviesRes);
            console.log(genreRes);
            let movieJson=await moviesRes.json();
            let genreJson=await genreRes.json();
            console.log(movieJson);
            console.log(genreJson);

           this.setState({movies:movieJson,genre:genreJson})

        }
        f();
        
    }



    render=()=>{
        return(
              
            <div>

                <NavBar/>
                <div class="row">
                    <Filter selectedFilter={this.state.selectedFilter} setFilter={this.setFilter} genreData={this.state.genre}  />
                    <div class="col-9">
                        <Search/>
                        <Table movies={this.state.movies} selectedFilter={this.state.selectedFilter}/>
                    </div>
                </div>
            </div>
            
          
             
          
            
        )
    }
}
export default App;