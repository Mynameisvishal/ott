// import React from 'react'
// import { Dropdown,Checkbox } from 'semantic-ui-react';
// import "./Filter.css";

// function Filter({ show,checkGenre }) {
    
//     return (
//         <Dropdown text='Sort by' pointing className={`link item ${show?"nav__visible":""}`}>
//             <Dropdown.Menu>
//                 <Dropdown.Header>Categories</Dropdown.Header>
//                 <Dropdown.Item>
//                     <Dropdown text='Genre'>
//                         <Dropdown.Menu>
//                             <Dropdown.Header onClick={() => { localStorage.removeItem('filter') }} >Genre</Dropdown.Header>
//                             <Dropdown.Item onClick={() => { checkGenre('Action Movies')}}>Action Movies</Dropdown.Item>
//                             <Dropdown.Item onClick={() => { localStorage.setItem('filter', 'Comedy Movies') }}>Comedy Movies</Dropdown.Item>
//                             <Dropdown.Item onClick={() => { localStorage.setItem('filter', 'Romantic Movies') }}>Romantic Movies</Dropdown.Item>
//                             <Dropdown.Item onClick={() => { localStorage.setItem('filter', 'Crime Movies') }}>Crime Movies</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </Dropdown.Item>
//                 <Dropdown.Item>
//                     <Dropdown text='Language'>
//                         <div>
                          
//                             <Checkbox label='English' />
//                             <Checkbox label='Hindi' />
//                             <Checkbox label='Tamil' />
//                         {/* <Dropdown.Item><Checkbox label='English' /></Dropdown.Item>
//                         <Dropdown.Item><Checkbox label='Hindi' /></Dropdown.Item>
//                         <Dropdown.Item><Checkbox label='Tamil' /></Dropdown.Item> */}
//                         </div>
//                     </Dropdown>
//                 </Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//     )
// }

// export default Filter

import React, { Component } from 'react'
import { Dropdown,Checkbox } from 'semantic-ui-react';
import "./Filter.css";

export class Filter extends Component {
    constructor(props) {
        super();
        this.state = {
            display:false,
            actionMovies: false,
            comedyMovies: false,
            romanticMovies: false,
            crimeMovies:false
        }
    }
    changeDisplay = () => {
        if (this.state.display) {
            this.setState({display:false})
        } else {
            this.setState({display:true})
        }
    }
    runThis = () => {
        const genre = {
            actionMovies: this.state.actionMovies,
            comedyMovies: this.state.comedyMovies,
            crimeMovies: this.state.crimeMovies,
            romanticMovies:this.state.romanticMovies
        }
        console.log(genre);
        this.props.checkGenre(genre);
    }
    selectGenre1 = (action) => {
        if (action) {
            this.setState({ actionMovies: false })
            this.runThis()
            
        } else {
            this.setState({ actionMovies: true })
            this.runThis()
        }
    }
    selectGenre3 = (action) => {
        if (action) {
            this.setState({ crimeMovies: false })
            this.runThis()
            
        } else {
            this.setState({ crimeMovies: true })
            this.runThis()
        }
    }
    selectGenre4 = (action) => {
        if (action) {
            this.setState({ romanticMovies: false })
            this.runThis()
            
        } else {
            this.setState({ romanticMovies: true })
            this.runThis()
        }
    }
    selectGenre2 = (action) => {
        if (action) {
            this.setState({ comedyMovies: false })
            this.runThis()
            
        } else {
            this.setState({ comedyMovies: true })
            this.runThis()
        }
    }
    render() {
        const { display,actionMovies,comedyMovies,crimeMovies,romanticMovies } = this.state;
        const { show } = this.props;
        return (
            <div className={`link ${show ? "nav__visible":""}`}>
               
                <button className="filter__button" onClick={this.changeDisplay.bind(this)}>Filter</button>
                {display ?<div className="filter__genre">
                    <input className="filter__checkbox" type="checkbox" name="Action Movies" value="Action Movies" label='Action Movies'/>
                    <Checkbox className="filter__checkbox"  onClick={this.selectGenre1.bind(this,actionMovies)} label='Action Movies'  />
                    <Checkbox className="filter__checkbox"  onClick={this.selectGenre2.bind(this,comedyMovies)} label='Comedy Movies' />
                    <Checkbox className="filter__checkbox"  onClick={this.selectGenre3.bind(this,crimeMovies)} label='Crime Movie' />
                    <Checkbox className="filter__checkbox" onClick={this.selectGenre4.bind(this, romanticMovies)} label='Romantic Movie' />
                    <hr />
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
