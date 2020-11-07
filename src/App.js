import React, { Component } from 'react';
import Row from "./Row";
import {requests,movies} from "./request";
import Login from "./authenticate/Login"
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Home";

// function App() {
  
//   const [loggedIn, setLoggedIn] = useState(false);
//   useEffect(() => {
//     const logger = localStorage.getItem('logedIn');
//     console.log(logger);
//     setLoggedIn(logger);
//   }, []);
  
  
//   return (
//     <React.Fragment>
//       {loggedIn ?
        
//     <div className="app"> 
      
//     <Nav />
//     <Banner />
//     <Row title="MOVIE BUZZ ORIGINALS" fetchURL={requests.fetchMovieBuzzOriginals} Largeone />
//     {/* <Row title="Recent Added" fetchURL={}/> */}
//     <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
//     <Row title="Indian Movies" fetchURL={requests.fetchIndianMovies} />
//     <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
//     <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
//     <Row title="Horrer Movies" fetchURL={requests.fetchHorrorMovies}/>
//     <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>

//   </div> :
//         <Login />
//     }
//     </React.Fragment>
//   )
// }

// export default App



class App extends Component {
  

  componentWillMount() {
    

  }
 
  render() {
    const logedin = false;
    const genre = ["anime", "thriller"]
    for (genre in a) {
      label a print
      movies filter with a
      princonst logedin = false;
      const genre = ["anime", "thriller"]
      for (genre in a) {
        label a print
        movies filter with a
          print t hor
    }
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/admin" exact={true} component={Admin}/>
          </Switch>
        </Router>
    </React.Fragment>
    )
  }
}

export default App
