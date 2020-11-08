import React, { Component } from 'react';
import Nav from "./components/Nav";
import Banner from './components/Banner';
import Row from "./components/Row";
// import { movies } from './request';

export class Home extends Component{
  constructor(props) {
    super();
    this.state = {
      filterGenre: {},
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
    const logedin = JSON.parse(localStorage.getItem('logedin'));
    if(logedin === false){
      this.props.history.push('/login');
    }
    
  }
  Selectedgenrelist = (selectedGenre) => {
    const movies = JSON.parse(localStorage.getItem('Movies'));

    console.log(selectedGenre);
    for (const [key, value] of Object.entries(movies)) { 
      // selectedGenre.map()
    }
  }
  genrelist = (genre) => {
    const movies = JSON.parse(localStorage.getItem('Movies'));
    var currentGenreMovies = [];
    // var selectedGenre = ["Action Movie", "Crime Movie"];
    // var isGenreSelected = false
    // selectedGenre.map((g2,key) => (
    //   g2=== genre ? isGenreSelected = true : ""
    // ))
    // if (!isGenreSelected) {
    //   return
    // }
    for (const [key, value] of Object.entries(movies)) {
      
      value.genre.map((g1, key) => (
        (g1 === genre) ?
          
          currentGenreMovies.push(value)
          : ""
        
      ))
    }
     return currentGenreMovies
   
  }

  render() {
    const { filterGenre,selectedGenre } = this.state;
    return (
       

      <div className="app">

        <Nav checkGenre={this.checkGenre.bind(this)}/>
        <Banner />
        <div>
          
        <Row title={"Action Movie"} fetchURL={this.genrelist("Action Movie")} Largeone/>
        <Row title={"Romantic Movie"} fetchURL={this.genrelist("Romantic Movie")} />
        <Row title={"Comedy Movie"} fetchURL={this.genrelist("Comedy Movie")} />
        <Row title={"Crime Movie"} fetchURL={this.genrelist("Crime Movie")} /> 
        </div>
        
          
         
       

      </div>
    );
  }
}
