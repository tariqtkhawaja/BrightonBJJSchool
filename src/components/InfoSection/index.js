import React from 'react'
import Layout from '../Layout'
import Footer from '../Footer'
import {
    InfoRow,
    InfoContent,
    Column1,
    Heading,
    TopLine,
    TextWrapper,
    InfoP,
    Column2,
    ImgWrap,
    Img
} from './InfoElements'


const WhoWeAre = () => {
    return (
        <>
            <Layout>
                <InfoContent>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Who We Are</TopLine>
                                <Heading>Friendly Brazilian Jiu Jitsu gym, offering affordable classes in central Brighton.</Heading>
                                <InfoP><p>
                                    We are most suitable for beginners level and so ideal for white and blue belts especially. <p>
                                    </p>
                                    We are mainly focused on sport jiu jitsu but also incorporate elements of self defence.
                                </p><br>
                                    </br>
                                    <p>We offer Gi and submission grappling classes.</p>
                                    <br></br><p>We are aiming to create relaxed and safe training environment for everyone to enjoy our favourite martial art, but if you like to push yourself more, you will also find suitable training partners here.</p>
                                </InfoP>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require('../../Assets/Images/ClassPhoto.jpg')} alt='Class Photo of Students lined up infront of Camera' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                    <Footer />
                </InfoContent>
            </Layout>
        </>
    )
}

export default WhoWeAre
