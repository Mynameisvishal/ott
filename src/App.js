import React, { Component } from 'react';
import Login from "./authenticate/Login"
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import Register from './authenticate/Register';


class App extends Component { 
  render() {
    // var selectedLanguage = [english, hindi]
    // var selectedGenre = [ animation]
    // const genres = ["action, ""animation", "Thriller",]
    // for (genres in genres) {
    //   var currentGenreMovies = []
    //   if !selectedGenre.contains(genre) {
    //     continue;
    //   }
    //   for (movie in movies) {
    //     if (moive.genre == genres && selectedLanguage.indexOf(movie.language) != nil ) {
    //       currentGenreMovies.add(movie)
    //     }
    //   }
    //   //UI CHANGES
    //   create a label with genreName
    //   creata a horizontal list currentGenreMovies

    
  
    const logedin = false;
    
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/register" exact={true} component={Register}/>
          </Switch>
        </Router>
    </React.Fragment>
    )
  }
}

export default App
