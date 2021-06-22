import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { PageData } from "../../pages/PageData";
import Button from "react-bootstrap/Button";
import Fade from 'react-reveal/Fade'
import Logo from '../../images/Best-Social-Media-Manager-New-Orleans.png';
import './Navbar.css';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return(
            <>
                <Fade cascade duration={1500}>
                    <nav className="NavbarItems">
                        <div className="navbar-logo">
                            <img src={ Logo } alt="Danielle Morrison" />
                        </div>
                        <div className="menu-icon" onClick={ this.handleClick }>
                            <i className={ this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
                        </div>
                        <ul className={ this.state.clicked ? "nav-menu active" : "nav-menu" }>
                            {PageData.map((item) => {
                                return (
                                    <li key={item.title}>
                                        <NavLink className={item.cName} activeClassName="active" to={item.url}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <div>
                            <Button 
                                bsPrefix="btn--email" 
                                href="mailto:daniellemdesignstudio@gmail.com?subject=Hi Danielle!"
                                type="button"
                            >
                                Email
                            </Button>
                        </div>
                    </nav>
                </Fade>
            </>
        )
    }
}

export default NavBar