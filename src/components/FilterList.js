import React, { Component } from 'react'
import Row from './Row'

export class FilterList extends Component {
    state = {
        sorting:'',
    };
    genrelist = (genre) => {
        const movies = JSON.parse(localStorage.getItem('Movies'));
        const sort = (localStorage.getItem('sort'));
        var currentGenreMovies = [];
        for (const [key, value] of Object.entries(movies)) {
          
          value.genre.map((g1, key) => (
            (g1 === genre) ?
              currentGenreMovies.push(value)
              : ""
          ))
        }
        if ( sort== "recent") {
            currentGenreMovies.sort((movie1, movie2) => {
              return movie1.addedTime - movie2.addedTime;
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
            <div>
                {
                    JSON.parse(localStorage.getItem("actionMovies")) ?
                    <Row title={"Action Movie"} fetchURL={this.genrelist("Action Movie")} Largeone/>:""
                }
                {
                    JSON.parse(localStorage.getItem("comedyMovies")) ?
                    <Row title={"Comedy Movie"} fetchURL={this.genrelist("Comedy Movie")} />:""
                }
                {
                    JSON.parse(localStorage.getItem("crimeMovies")) ?
                    <Row title={"Crime Movie"} fetchURL={this.genrelist("Crime Movie")} /> :""
                }
                {
                    JSON.parse(localStorage.getItem("romanticMovies")) ?
                    <Row title={"Romantic Movie"} fetchURL={this.genrelist("Romantic Movie")} />:''
                }
            </div>
        )
    }
}

export default FilterList
