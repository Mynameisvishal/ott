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
                
            } else {
                this.setState({ actionMovies: true })
                localStorage.setItem("actionMovies", "true");
            }
        }

    selectGenre2 = (action) => {
        if (action) {
            this.setState({ comedyMovies: false })
            localStorage.setItem("comedyMovies", "false");
        } else {
            this.setState({ comedyMovies: true })
            localStorage.setItem("comedyMovies", "true");
        }
    }

    selectGenre3 = (action) => {
        if (action) {
            this.setState({ crimeMovies: false })
            localStorage.setItem("crimeMovies", "false");
            
        } else {
            this.setState({ crimeMovies: true })
            localStorage.setItem("crimeMovies", "true");
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

