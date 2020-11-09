import React, { Component } from 'react';
import Nav from "./components/Nav";
import Banner from './components/Banner';
import Row from "./components/Row";
import FilterList from './components/FilterList';
import { movies } from './request';

export class Home extends Component{
  constructor(props) {
    super();
    this.state = {
      filterGenre: {},
      filteron: false,
      selectedGenre: [],

    };
  }
 
  componentWillMount() {
    this.setState({ filteron: JSON.parse(localStorage.getItem('filterItem')) })
    const logedin = JSON.parse(localStorage.getItem('logedin'));
    if (logedin === false) {
      this.props.history.push('/login');
    }  
  }

  genrelist = (genre) => {
    var currentGenreMovies = [];
    var storedMovies = localStorage.getItem('Movies')
    if (!storedMovies) {
      localStorage.setItem('Movies', JSON.stringify(movies))
      storedMovies = JSON.stringify(movies)
    }
    storedMovies = JSON.parse(storedMovies)
    for (const [key, value] of Object.entries(storedMovies)) {
      value.genre.map((g1, key) => (
        (g1 === genre) ?
          
          currentGenreMovies.push(value)
          : ""
        
      ))
    }
    const sort = localStorage.getItem('sort')
    if (sort == "recent") {
      currentGenreMovies.sort((movie1, movie2) => {
        return parseInt(movie1.addedTime) - parseInt(movie2.addedTime)
      });
    }
    if (sort == "rating") {
      currentGenreMovies.sort((movie1, movie2) => {
        return parseInt(movie1.rating) - parseInt(movie2.rating)
      });
    }
    return currentGenreMovies
   
  }

  render() {
    return (
       

      <div className="app">

        <Nav />
        <Banner />
        
        {this.state.filteron ?
          
          <FilterList />
          :
          <div>
            <Row title={"Action Movie"} fetchURL={this.genrelist("Action Movie")} Largeone />
            <Row title={"Romantic Movie"} fetchURL={this.genrelist("Romantic Movie")} />
            <Row title={"Comedy Movie"} fetchURL={this.genrelist("Comedy Movie")} />
            <Row title={"Crime Movie"} fetchURL={this.genrelist("Crime Movie")} />
          </div>
            
        }
      </div>
    );
  }
}
