import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={require('../../Assets/Images/Logo.png')} alt="Logo" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/who-are-we" activeStyle>
                        Who Are We
                    </NavLink>
                    <NavLink to="/our-values" activeStyle>
                        Our Values
                    </NavLink>
                    <NavLink to="/what-is-bjj" activeStyle>
                        What is BJJ?
                    </NavLink>
                    <NavLink to="/timetable" activeStyle>
                        Timetable
                    </NavLink>
                    <NavLink to="/Prices" activeStyle>
                        Prices
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar

