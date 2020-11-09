import React, { Component } from 'react'
import Filter from './Filter';
import "./Nav.css";
import Sort from './Sort';

export class Nav extends Component {
    constructor(props) {
        super();
        this.state = {
            show: false,
            dropName: 'sort by',
        }    
    }

    logout = (props) => {
        localStorage.setItem('logedin', 'false');
        if (localStorage.getItem('admin') == true) {
            localStorage.setItem('admin', 0);
        }
        window.location.reload();
    };

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
        const { show } = this.state;
        const background = this.props;
        return (
            <div className={`navbar ${show && "nav__black"} ${background === "true" ? "nav__black" : ""} `}>
                <h1 className={`nav__logo ${show && "nav__shadow"}`}> MOVIE BUZZ</h1>
                <div>
                    {show ? <Sort /> : ""}
                    {JSON.parse(localStorage.getItem('logedin')) ? <Filter show={show} checkGenre={this.props.checkGenre} /> : ""}
                    {JSON.parse(localStorage.getItem('logedin')) ?
                        <button className={`navbar__button ${show && "nav__outline"}`} onClick={this.logout.bind(this)}>
                            {JSON.parse(localStorage.getItem('logedin')) ? "Log out" : ""}
                        </button> : ""
                    }
                </div>
            </div>

        )
    }
}

export default Nav
