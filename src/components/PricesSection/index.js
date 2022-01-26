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
    Img
} from './PricesElements'

const PricesSection = () => {
    return (
        <>
            <Layout>
                <PricesContent>
                    <PricesRow>
                        <Column1>
                            <ImgWrap>
                                <Img src={require('../../Assets/Images/Group-photoT.jpg')} />
                                <br></br>
                                <Img src={require('../../Assets/Images/Group-selfie.jpg')} />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <TopLine1>Prices</TopLine1>
                                <PricesUl>
                                    <li>Class £8</li>
                                    <li>Open mat £5</li>
                                    <li>Full-Time membership £60 (all classes and open mats included)</li>
                                </PricesUl>
                                <TopLine2>How to Join?</TopLine2>
                                <PricesP>Get in touch with us either via email or social media. If you need to borrow Gi for your first class or two, let us know in advance and we will have one ready for you. Make sure to cut your nails. If you have a gumshield/mouth guard bring it as well.</PricesP>
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
