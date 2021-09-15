import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import Login from "./Login";
import Rentals from "./Rentals";
import Customers from "./Customer";

class App extends React.Component {
    state = {
        movies: [],
        genre: [],
        selectedFilter: "Genre",
        search: ""

    }
    updateSearch = (text) => {
        this.setState({ search: text })
    }


    setFilter = (filter) => {
        this.setState({ selectedFilter: filter })
    }
    handleToggle = (id) => {
        let index = this.state.movies.findIndex((el) => {
            return id == el._id;
        })

        let moviesCopy = this.state.movies.map((el) => el);
        if (moviesCopy[index].liked) {
            moviesCopy[index].liked = false;
        }
        else {
            moviesCopy[index].liked = true;
        }
        this.setState({ movies: moviesCopy });
    }

    deleteMovies = (id) => {
        let moviesFiltered = this.state.movies.filter((el) => {
            return el._id != id;
        })
        this.setState({ movies: moviesFiltered });
    }
    componentDidMount() {

        let f = async () => {
            let moviesRes = await fetch("http://localhost:4000/movies");
            let genreRes = await fetch("http://localhost:4000/genre")
            console.log(moviesRes);
            console.log(genreRes);
            let movieJson = await moviesRes.json();
            let genreJson = await genreRes.json();
            console.log(movieJson);
            console.log(genreJson);

            this.setState({ movies: movieJson, genre: genreJson })

        }
        f();

    }



    render = () => {
        return (


            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route path="/customers">
                            <Customers />
                        </Route>
                        <Route path="/rentals">
                            <Rentals />
                        </Route>

                        <Route path="/">

                            <div class="row">
                                <Filter
                                    selectedFilter={this.state.selectedFilter}
                                    setFilter={this.setFilter}
                                    genreData={this.state.genre} />
                                <div class="col-9">
                                    <Search
                                        search={this.state.search}
                                        updateSearch={this.updateSearch}
                                        movies={this.state.movies} />
                                    <Table
                                        search={this.state.search}
                                        deleteMovies={this.deleteMovies}
                                        handleToggle={this.handleToggle}
                                        movies={this.state.movies}
                                        selectedFilter={this.state.selectedFilter} />
                                </div>
                            </div>

                        </Route>
                    </Switch>



                </div>
            </Router>





        )
    }
}
export default App;