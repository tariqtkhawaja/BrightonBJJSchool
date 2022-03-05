import React from 'react'
import Layout from '../Layout'

import { BjjGoogleMap } from './GoogleMap'
import {
    ContactContent,
    ContactP,
    TextWrapper,
    TopLine1,
    TopLine2,
    SocialMediaWrap,
    SocialIcons,
    SocialIconsLink,
} from './ContactElements'
import Footer from '../Footer'
import { FiMail } from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'



const ContactSection = () => {
    return (
        <>
            <Layout>
                <ContactContent>
                    <TextWrapper>
                        <TopLine1>Contact Us</TopLine1>
                        <ContactP>Contact us via email or on social media.</ContactP>
                        <SocialMediaWrap>
                            <SocialIcons>
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
                        <br></br>
                        <TopLine2>Find Us</TopLine2>
                        <ContactP>We are at 2nd Floor of  Vantage Point, New England Road, Brighton BN1 4GW
                            You will need door codes to enter.</ContactP>
                    </TextWrapper>
                    <BjjGoogleMap />
                    <Footer />
                </ContactContent>
            </Layout>

        </>
    )
}

export default ContactSection
