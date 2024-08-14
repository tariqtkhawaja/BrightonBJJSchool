import React from 'react';
import Footer from '../Footer';
import Layout from '../Layout';
import AccordionComponent from './AccordionComponent';
import {
    BjjContent,
    BjjRow,
    Column1,
    Column2,
    TopLine1,
    TopLine2,
    Heading,
    BjjP,
    BjjFlexRow,
    Img,
    ImgWrap,
    TextWrapper,
    FaqTopLine,
    FaqWrapper, MoreInfoLink
} from './BJJElements'
const WhatisBJJ = () => {
    return (
        <>
            <Layout>
                <BjjContent>
                    <BjjRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine1>What is BJJ?</TopLine1>
                                <Heading>A grappling style characterized by groundwork in which the ultimate aim is to defeat your opponent using techniques like joint locks and chokes.</Heading>
                                <BjjP>
                                    <p>One of the many great things about BJJ is that it is sparring based (called “rolling”), so you get to really apply the techniques you’re learning without holding back. There’s no punching, kicking or other striking involved. You could look at it as a form of fighting without hurting. One of the reasons BJJ has become popular is that it’s an essential element in MMA (mixed martial arts).</p>
                                </BjjP>
                                <TopLine2>What's the difference between Gi and Submission Grappling?</TopLine2>
                                <BjjP>
                                    <p>In Gi classes we train wearing a jacket and pants, called a “Gi”. If you already have a Gi, then great, but if you don’t, message us beforehand and we should be able to lend you one.
                                        Submission Grappling (also called NoGi) is a similar style but instead of Gi uniform, using shorts, t-shirts or compression wear like rashguards. Because there is no jacket to grip and control, it tends to be much more dynamic and involves a lot of wrestling.</p>
                                </BjjP>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require('../../Assets/Images/2024-Gi-grips.jpg')} alt="Two BJJ players demonstraing a takedown's grips" />
                                <br></br>
                                <Img src={require('../../Assets/Images/SideControl.jpg')} alt='2 BJJ players demonstrating an escape from side control' />
                            </ImgWrap>
                        </Column2>
                    </BjjRow>
                    <BjjFlexRow>
                        <FaqWrapper>
                            <FaqTopLine>FAQ</FaqTopLine>
                            <AccordionComponent />
                            <BjjP>
                                <p>For more white belt resources check out this excellent link from Bellingham BJJ:</p>
                                <MoreInfoLink href='https://bellinghambjj.com/category/the-white-belt-starter-kit/' target="_blank" aria-label='Bellingham BJJ Article - The White Belt Starter Kit'>here</MoreInfoLink>
                            </BjjP>
                        </FaqWrapper>
                    </BjjFlexRow>
                    <Footer />
                </BjjContent>

            </Layout>

        </>
    )
}

export default WhatisBJJ
