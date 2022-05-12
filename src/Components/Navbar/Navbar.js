import React, { Component } from "react";
import { Button } from "../Button.js";
import { MenuItems } from "./MenuItems.js";
import './Navbar.style.css';
import RegistrationForm from "../RegistrationForm/RegistrationForm.js";
import { Link } from "react-router-dom";
// to do:funcitonal compinent
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Event Planner<i className="fa-solid fa-futbol"></i></h1>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                        )
                    }
                    )}
                </ul>
                <Link to="/RegisterForm" >
                    <Button className="Sign-in-button" >Sign up</Button>
                </Link>

            </nav>
        )
    }
}

export default Navbar;