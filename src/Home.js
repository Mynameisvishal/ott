import React, { Component } from 'react';
import Nav from "./components/Nav";
import Banner from './components/Banner';
import Row from "./components/Row";
import {  movies,} from "./request";


export class Home extends Component{
  constructor(props) {
    super();
    this.state = {
      filterGenre: ''
    }
  }
  checkGenre = (value) => {
    this.setState({ filterGenre: value })
    console.log('genre checked');
  }

  componentWillMount() {
    // const history =
    const logedin = JSON.parse(localStorage.getItem('logedin'));
    if(logedin === false){
      this.props.history.push('/login');
    }
    
  }
  genrelist = (genre) => {
    var currentGenreMovies = [];
    for (const [key, value] of Object.entries(movies)) {
      // if (value.genre === genre) {
      //   currentGenreMovies.push(value);
      // }
      value.genre.map((g1, key) => (
        (g1 === genre) ?
          currentGenreMovies.push(value):""
        
      ))
    }
     return currentGenreMovies
   
  }

  render() {
    
    const { filterGenre } = this.state;
    return (
       

      <div className="app">

        <Nav checkGenre={this.checkGenre.bind(this)}/>
        <Banner />
        
            
        <Row title={filterGenre ?"":  "Action Movie"} fetchURL={ filterGenre ?"": this.genrelist("Action Movie")} Largeone/>
        <Row title={filterGenre ?"":  "Romantic Movie"} fetchURL={this.genrelist("Romantic Movie")} />
        <Row title={filterGenre ?"":  "Comedy Movie"} fetchURL={this.genrelist("Comedy Movie")} />
        <Row title={filterGenre ?"":  "Crime Movie"} fetchURL={this.genrelist("Crime Movie")} /> 
          
         
       

      </div>
    );
  }
}
