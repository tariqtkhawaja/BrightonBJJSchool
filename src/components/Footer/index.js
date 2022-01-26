import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconsLink,
} from './FooterElements'
import { FiMail } from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                                <img src={require('../../Assets/Images/Logo-transparent1.png')} height="50vh" width="auto" alt="Logo" />
                            </SocialLogo>
                            <WebsiteRights>
                                Brighton BJJ School © {new Date().getFullYear()} All Rights Reserved </WebsiteRights>
                            <SocialIcons>
                                <br></br>
                                <SocialIconsLink href="https://www.facebook.com/brightonbjjschool/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconsLink>
                                <SocialIconsLink href="https://www.instagram.com/brightonbjjschool/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconsLink>
                                <SocialIconsLink href="mailto:grapplingcoopbrighton@gmail.com" target="_blank" aria-label="Email">
                                    <FiMail />
                                </SocialIconsLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>

        </>
    )
}

export default Footer
