import React from 'react'
import {
    SidebarContainer,
    SidebarLink,
    SidebarWrapper,
    SidebarMenu,
    Icon,
    CloseIcon
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/who-are-we" onClick={toggle}>
                            Who Are We
                        </SidebarLink>
                        <SidebarLink to="/our-values" onClick={toggle}>
                            Our Values
                        </SidebarLink>
                        <SidebarLink to="/what-is-bjj" onClick={toggle}>
                            What is BJJ
                        </SidebarLink>
                        <SidebarLink to="/timetable" onClick={toggle}>
                            Timetable
                        </SidebarLink>
                        <SidebarLink to="/prices" onClick={toggle}>
                            Prices
                        </SidebarLink>
                        <SidebarLink to="/contact-us" onClick={toggle}>
                            Contact Us
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar
