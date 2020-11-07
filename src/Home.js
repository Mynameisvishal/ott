import React, { Component } from 'react';
import Nav from "./Nav";
import Banner from './Banner';
import Row from "./Row";
import requests from "./request";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


export class Home extends Component{
  // componentWillMount() {
  //   // const history =
  //   const logedin = JSON.parse(localStorage.getItem('logedin'));
  //   if(!logedin){
  //     this.props.history.push('/login');
  //   }
  // }

  render() {
    return (

      <div className="app">

        <Nav/>
        <Banner/>
        <Row title="MOVIE BUZZ ORIGINALS" fetchURL={requests.fetchMovieBuzzOriginals} Largeone/>
        {/* <Row title="Recent Added" fetchURL={}/> */}
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Row title="Indian Movies" fetchURL={requests.fetchIndianMovies}/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
        <Row title="Horrer Movies" fetchURL={requests.fetchHorrorMovies}/>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>

      </div>
    );
  }
}
