import React, {useEffect,useState} from 'react'
import "./Nav.css";
import Login from "./authenticate/Login";

function Nav() {
    const [show, handleShow] = useState(false);

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
    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <h1 className={`nav__logo ${show && "nav__shadow"}`}> MOVIE BUZZ</h1>
            <div>
                {/* {window.matchMedia("(max-width: 700px)") ? {} : <Input icon='search' className={`nav__search ${show && "nav__visible"}`} placeholder='Search...' /> }
                } */}
                <button className={`navbar__button ${show && "nav__outline"}`} onClick={logout}>
                    Log out
                </button>
            </div>
        </div>
    )
}

export default Nav
