import React, { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import "./Nav.css";
import Login from "./authenticate/Login";

function Nav() {
    const [show, handleShow] = useState(false);
    const [dropName, changeDropName] = useState('Sort by');

    const logout = () => {
        localStorage.setItem('logedin', false);
        return (
        
                <Login />
        )
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 120) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",()=>{});
        };
    }, []);

    const handleChange = (event) => {
        changeDropName(event.target.name);
    }

    return (

        <div className={`navbar ${show && "nav__black"}`}>
            <h1 className={`nav__logo ${show && "nav__shadow"}`}> MOVIE BUZZ</h1>
            <div>
            <Dropdown
                text={dropName}
                icon='filter'
                floating
                labeled
                button
                onChange={handleChange}
                className={`icon nav__dropdown ${show && "nav__visible"}`}
            >
                <Dropdown.Menu>
                <Dropdown.Header name="Sort by" icon='tags' content='Sort by' />
                <Dropdown.Item name="Movie Buzz Orginals" >Movie Buzz Orginals</Dropdown.Item>
                <Dropdown.Item name="Trending Now">Trending Now</Dropdown.Item>
                <Dropdown.Item name="Indian Movies">Indian Movies</Dropdown.Item>
                <Dropdown.Item name="Top Rated">Top Rated</Dropdown.Item>
                <Dropdown.Item name="Action Movies">Action Movies</Dropdown.Item>
                <Dropdown.Item name="Horrer Movies">Horrer Movies</Dropdown.Item>
                <Dropdown.Item name="Comedy Movies">Comedy Movies</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                {/* {window.matchMedia("(max-width: 700px)") ? {} : <Input icon='search' className={`nav__search ${show && "nav__visible"}`} placeholder='Search...' /> }
                } */}
                <button className={`navbar__button ${show && "nav__outline"}`} onClick={logout}>
                    {JSON.parse(localStorage.getItem('logedin')) ? "Log out" : "Login"}
                </button>
            </div>
        </div>
    )
}

export default Nav
