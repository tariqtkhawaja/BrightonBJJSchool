import React from 'react'
import {
    Nav,
    NavLink,
    NavbarContainer,
    NavLogo,
    Bars,
    NavMenu,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src={require('../../Assets/Images/Logo-transparent1.png')} height="55vh" width="auto" alt="Logo" />
                    </NavLogo>
                    <Bars onClick={toggle} tabIndex={0} />
                    <NavMenu>
                        <NavLink to="/who-are-we" activeStyle>
                            Who Are We
                            {/* <InfoSection /> */}
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
                        <NavLink to="/prices" activeStyle>
                            Prices
                        </NavLink>
                        <NavLink to="/contact-us" activeStyle>
                            Contact Us
                        </NavLink>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

