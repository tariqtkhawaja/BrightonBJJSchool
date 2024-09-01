import React from 'react'
import Footer from '../Footer'
import Layout from '../Layout'
import {
    PricesContent,
    PricesRow,
    PricesUl,
    PricesP,
    Column1,
    Column2,
    TextWrapper,
    TopLine1,
    TopLine2,
    ImgWrap,
    Img,
    SocialMediaWrap,
    SocialIcons,
    SocialIconsLink,
} from './PricesElements'
import { FiMail } from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const PricesSection = () => {
    return (
        <>
            <Layout>
                <PricesContent>
                    <PricesRow>
                        <Column1>
                            <ImgWrap>
                                <Img src={require('../../Assets/Images/2024-Gi-Class.jpg')} alt="Group Photo of Students Lined up, a mix of men and women white and blue belts" />
                                <br></br>
                                <Img src={require('../../Assets/Images/2024-Nogi.jpg')} alt='One student demonstrating a guard pass' />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <TopLine1>Prices</TopLine1>
                                <PricesUl>
                                    <li>£9.50 per session</li>
                                    <li>Open mat £5 per session</li>
                                    <li>Full-Time membership £67 per month (all classes and open mats included, paid on the 1st of every month)</li>
                                </PricesUl>
                                <TopLine2>How to Join?</TopLine2>
                                <PricesP>Get in touch with us either via email or social media. If you need to borrow Gi for your first class or two, let us know in advance and we will have one ready for you. Make sure to cut your nails. If you have a gumshield/mouth guard bring it as well.</PricesP>
                                <br></br>
                                <SocialMediaWrap>
                                    <SocialIcons>
                                        <br></br>
                                        <SocialIconsLink href="https://www.facebook.com/brightonbjjschool/" target="_blank" aria-label="Facebook">
                                            <FaFacebook />
                                        </SocialIconsLink>
                                        <SocialIconsLink href="https://www.instagram.com/brightonbjjschool/" target="_blank" aria-label="Instagram">
                                            <FaInstagram />
                                        </SocialIconsLink>
                                        <SocialIconsLink href="mailto:info@brightonbjj.co.uk" target="_blank" aria-label="Email">
                                            <FiMail />
                                        </SocialIconsLink>
                                    </SocialIcons>
                                </SocialMediaWrap>
                            </TextWrapper>
                        </Column2>
                    </PricesRow>
                    <Footer />
                </PricesContent>
            </Layout>

        </>
    )
}

export default PricesSection
