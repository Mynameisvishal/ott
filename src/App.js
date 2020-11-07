import React, { Component } from 'react';
import Row from "./Row";
import requests from "./request";
import Nav from "./Nav";
import Banner from './Banner';
import Login from "./authenticate/Login"
import "./App.css";

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



export class App extends Component {
  

  componentWillMount() {
    

  }
 
  render() {
    const logedin = localStorage.getItem('logedin');
    
    return (
     
      <React.Fragment>
      {logedin ?
          <Login/> :
    <div className="app"> 
      
      <Nav />
      <Banner />
      <Row title="MOVIE BUZZ ORIGINALS" fetchURL={requests.fetchMovieBuzzOriginals} Largeone />
      {/* <Row title="Recent Added" fetchURL={}/> */}
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Indian Movies" fetchURL={requests.fetchIndianMovies} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Horrer Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>

    </div>
    }
    </React.Fragment>
    )
  }
}

export default App
