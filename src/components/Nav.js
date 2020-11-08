import React, { Component } from 'react'
import Filter from './Filter';
import "./Nav.css";


export class Nav extends Component {
    constructor(props) {
        super();
        this.state = {
            show: false,
            dropName: 'sort by',
        }    
    }
    logout = () => {

        console.log('Logout');
        localStorage.setItem('logedin', 'false');
        if (localStorage.getItem('admin') == true) {
            localStorage.setItem('admin', 0);
        }
        // this.props.history.push('/login')
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 120) {
                this.setState({ show: true });
            } else this.setState({show: false})
        });
        return () => {
            window.removeEventListener("scroll",()=>{});
        };
    }
    
    render() {
        const { dropName, show } = this.state;
        
        return (
            <div className={`navbar ${show && "nav__black"} ${localStorage.getItem('logedin') && "nav_black"} `}>
            <h1 className={`nav__logo ${show && "nav__shadow"}`}> MOVIE BUZZ</h1>
                <div>
                
                    <Filter show={show} checkGenre={ this.props.checkGenre}/>
                <button className={`navbar__button ${show && "nav__outline"}`} onClick={this.logout.bind(this)}>
                    {JSON.parse(localStorage.getItem('logedin')) ? "Log out" : ""}
                </button>
            </div>
        </div>

        )
    }
}

export default Nav
