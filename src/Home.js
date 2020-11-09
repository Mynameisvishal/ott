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

    }
  }
  checkGenre = (value) => {
    this.setState({ filterGenre: value })
    console.log(this.state.filterGenre);
    const filter = this.state.filterGenre;
    var selectedGenre = [];
    var x1;
    if (filter.actionMovies) {
      x1 = "Action Movies"
      selectedGenre.push(x1);

    }
    if (filter.comedyMovies) {
      x1 = "Comedy Movies"
      selectedGenre.push(x1);
    }
    if (filter.romanticMovies) {
      x1 = "Romantic Movies"
      selectedGenre.push(x1);
    }
    if (filter.crimeMovies) {
      x1 = "Crime Movies"
      selectedGenre.push(x1);
    }
    console.log('inside selected genre');
    console.log(selectedGenre);
    this.setState({ selectedGenre: selectedGenre })
  }
 
  componentWillMount() {
    
    this.setState({filteron: JSON.parse(localStorage.getItem('filterItem'))})
    const logedin = JSON.parse(localStorage.getItem('logedin'));
    if(logedin === false){
      this.props.history.push('/login');
    }
    
  }
  Selectedgenrelist = (selectedGenre) => {
    // const movies = JSON.parse(localStorage.getItem('Movies'));

    console.log(selectedGenre);
    for (const [key, value] of Object.entries(movies)) { 
      // selectedGenre.map()
    }
  }
  // var selectedGenre = ["Action Movie", "Crime Movie"];
  // var isGenreSelected = false
  // selectedGenre.map((g2,key) => (
  //   g2=== genre ? isGenreSelected = true : ""
  // ))
  // if (!isGenreSelected) {
  //   return
  // }
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
    console.log(currentGenreMovies)
    const sort = localStorage.getItem('sort')
    if ( sort == "recent") {
        console.log('');
        currentGenreMovies.sort((movie1, movie2) => {
            console.log(movie1.addedTime);
          console.log(movie2.addedTime);
          return parseInt(movie1.addedTime) - parseInt(movie2.addedTime)
        });
    }
     return currentGenreMovies
   
  }

  render() {
    const { filterGenre,filteron,selectedGenre } = this.state;
    return (
       

      <div className="app">

        <Nav checkGenre={this.checkGenre.bind(this)}/>
        <Banner />
        
        {this.state.filteron ?
          
            <FilterList />
           :
          <div>
            <Row title={"Action Movie"} fetchURL={this.genrelist("Action Movie")} Largeone/>
            <Row title={"Romantic Movie"} fetchURL={this.genrelist("Romantic Movie")} />
            <Row title={"Comedy Movie"} fetchURL={this.genrelist("Comedy Movie")} />
            <Row title={"Crime Movie"} fetchURL={this.genrelist("Crime Movie")} /> 
          </div>
            
        }
       
        {/* <Row title={"Romantic Movie"} fetchURL={this.genrelist("Romantic Movie")} />
        <Row title={"Comedy Movie"} fetchURL={this.genrelist("Comedy Movie")} />
        <Row title={"Crime Movie"} fetchURL={this.genrelist("Crime Movie")} />  */}
        
        
          
         
       

      </div>
    );
  }
}
