import React, { Component } from 'react'
import Row from './Row'

export class FilterList extends Component {
    state = {
        sorting:'',
        
    };
    // componentWillMount() {
    //     this.setState({ sorting:JSON.parse(localStorage.getItem('sort'))})
    // }
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
        console.log(currentGenreMovies)

        // // if ( sort== "recent") {
        // //     console.log('');
            currentGenreMovies.sort((movie1, movie2) => {
                console.log(movie1.addedTime);
                console.log(movie2.addedTime);
              return movie1.addedTime - movie2.addedTime;
            });
        // // }
        console.log(currentGenreMovies)
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
