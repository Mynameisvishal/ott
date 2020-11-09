import React, { Component } from 'react'
import { Dropdown,Checkbox, Icon } from 'semantic-ui-react';
import "./Filter.css";

export class Filter extends Component {
    constructor(props) {
        super();
        this.state = {
            display:false,
            actionMovies: localStorage.actionMovies,
            comedyMovies: localStorage.comedyMovies,
            romanticMovies: localStorage.romanticMovies,
            crimeMovies:localStorage.crimeMovies
        }
    }

    componentWillMount = () =>  {
        if (!localStorage.actionMovies) {
            localStorage.setItem('actionMovies', false);

        }
        if (!localStorage.comedyMovies) {
            localStorage.setItem('comedyMovies', false);
        }
        if (!localStorage.crimeMovies) {
            localStorage.setItem('crimeMovies', false);
        }
        if (!localStorage.romanticMovies) {
            localStorage.setItem('romanticMovies', false);
        }
    }

    changeDisplay = () => {
        if (this.state.display) {
            this.setState({ display: false })
            // localStorage.setItem("actionMovies", false);
            // localStorage.setItem("comedyMovies", false);
            // localStorage.setItem("crimeMovies", false);
            // localStorage.setItem("romanticMovies", false);
            localStorage.setItem("filterItem", false);
        } else {
            this.setState({ display: true })
            localStorage.setItem("filterItem", "true");

        }
    }
    selectGenre1 = (action) => {
            if (action) {
                this.setState({ actionMovies: false })
                localStorage.setItem("actionMovies", "false");
                // window.location.reload();
                
            } else {
                this.setState({ actionMovies: true })
                localStorage.setItem("actionMovies", "true");
                // window.location.reload();
            }
        }

    selectGenre2 = (action) => {
        if (action) {
            this.setState({ comedyMovies: false })
            localStorage.setItem("comedyMovies", "false");
            // window.location.reload();
        } else {
            this.setState({ comedyMovies: true })
            localStorage.setItem("comedyMovies", "true");
            // window.location.reload();
        }
    }

    selectGenre3 = (action) => {
        if (action) {
            this.setState({ crimeMovies: false })
            localStorage.setItem("crimeMovies", "false");
            // window.location.reload();
            
        } else {
            this.setState({ crimeMovies: true })
            localStorage.setItem("crimeMovies", "true");
            // window.location.reload();
        }
    }

    selectGenre4 = (action) => {
        if (action) {
            this.setState({ romanticMovies: false })
            localStorage.setItem("romanticMovies", "false");
            
        } else {
            this.setState({ romanticMovies: true })
            localStorage.setItem("romanticMovies", "true");
        }
    }
    
    render() {
        const { display,actionMovies,comedyMovies,crimeMovies,romanticMovies } = this.state;
        const { show } = this.props;
        return (
            <div className={`link ${show ? "nav__visible":""}`}>
               
                <button className="filter__button" onClick={this.changeDisplay.bind(this)}>Filter</button>
                {display ?<div className="filter__genre">
                    <Checkbox className="filter__checkbox"
                        checked={JSON.parse(this.state.actionMovies)}                                                                                     
                        onClick={this.selectGenre1.bind(this,actionMovies)}
                        label='Action Movies' />
                    <Checkbox className="filter__checkbox" checked={JSON.parse(this.state.comedyMovies)} onClick={this.selectGenre2.bind(this,comedyMovies)} label='Comedy Movies' />
                    <Checkbox className="filter__checkbox" checked={JSON.parse(this.state.crimeMovies)} onClick={this.selectGenre3.bind(this,crimeMovies)} label='Crime Movie' />
                    <Checkbox className="filter__checkbox" checked={JSON.parse(this.state.romanticMovies)} onClick={this.selectGenre4.bind(this, romanticMovies)} label='Romantic Movie' />
                    <button onClick={()=>{window.location.reload()}}><Icon name="check"/>apply</button>
                    <h6 className="filter__checkbox filter__header">Languages</h6>
                    <Checkbox className="filter__checkbox" label='English' />
                    <Checkbox className="filter__checkbox" label='Hindi' />

                </div>        
                :""}     
            </div>
           
        )
    }
}

export default Filter

// import React, { useState, useEffect } from 'react';
// import { Checkbox } from 'semantic-ui-react';
// import "./Filter.css";

// function Filter({show}) {
//     const [display, setDisplay] = useState(false);
//     const [actionMovies, setActionMovies] = useState(false);
//     const [comedyMovies, setComedyMovies] = useState(false);
//     const [crimeMovies, setCrimeMovies] = useState(false);
//     const [romanticMovies, setRomanticMovies] = useState(false);
    

//     const changeDisplay = () => {
//         if (display) {
//             setDisplay(false);
//             localStorage.setItem("actionMovies", false);
//             localStorage.setItem("comedyMovies", false);
//             localStorage.setItem("crimeMovies", false);
//             localStorage.setItem("romanticMovies", false);
//             localStorage.setItem("filterItem", false);
//         } else {
//             setDisplay(true);
//             localStorage.setItem("filterItem", true);
//         }
//     }
    
//     const selectGenre1 = (action) => {
//         if (action) {
//             setActionMovies(false);
//             localStorage.setItem("actionMovies", "false"); 
//         } else {
//             setActionMovies(true);
//             localStorage.setItem("actionMovies", "true");
//         }
//     }

//     const selectGenre2 = (action) => {
//         if (action) {
//             setComedyMovies(false);
//             localStorage.setItem("comedyMovies", "false");

//         } else {
//             setComedyMovies(true);
//             localStorage.setItem("comedyMovies", "true");
//         }   
//     }

//     const selectGenre3 = (action) => {
//         if (action) {
//             setCrimeMovies(false);
//             localStorage.setItem("crimeMovies", "false");
            
//         } else {
//             setCrimeMovies(true);
//             localStorage.setItem("crimeMovies", "true");
//         }
//     }

//     const selectGenre4 = (action) => {
//         if (action) {
//             setRomanticMovies(false);
//             localStorage.setItem("romanticMovies", "false");
            
//         } else {
//             setRomanticMovies(true);
//             localStorage.setItem("romanticMovies", "true");
//         }
//     }
    
//     return (
//         <div className={`link ${show ? "nav__visible":""}`}>
               
//         <button className="filter__button" onClick={changeDisplay}>Filter</button>
//         {display ?<div className="filter__genre">
//             <Checkbox className="filter__checkbox"
//                 checked={JSON.parse(actionMovies)}                                                                                     
//                 onClick={selectGenre1(actionMovies)}
//                 label='Action Movies' />
//             <Checkbox className="filter__checkbox" checked={JSON.parse(comedyMovies)} onClick={selectGenre2(comedyMovies)} label='Comedy Movies' />
//             <Checkbox className="filter__checkbox" checked={JSON.parse(crimeMovies)} onClick={selectGenre3(crimeMovies)} label='Crime Movie' />
//             <Checkbox className="filter__checkbox" checked={JSON.parse(romanticMovies)} onClick={selectGenre4(romanticMovies)} label='Romantic Movie' />
//             <hr />
//             <h6 className="filter__checkbox filter__header">Languages</h6>
//             <Checkbox className="filter__checkbox" label='English' />
//             <Checkbox className="filter__checkbox" label='Hindi' />

//         </div>        
//         :""}     
//     </div>
//     )
// }

// export default Filter
