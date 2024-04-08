import React from 'react'
import { LayoutContainer, LayoutLogo, LayoutBg } from './LayoutElements'

const Layout = ({ children }) => {
    return (
        <>
            <LayoutContainer>
                <LayoutBg>
                    <LayoutLogo>
                        <img src={require('../../Assets/Images/Logo-transparent1.png')} height="500vh" width="auto" alt="Logo" />
                    </LayoutLogo>
                </LayoutBg>
                {children}
            </LayoutContainer>
        </>
    )
}

export default Layout
