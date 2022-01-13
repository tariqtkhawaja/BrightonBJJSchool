import React from 'react'
import Layout from '../Layout'
import {
    ValuesContent,
    ValuesRow,
    Column1,
    Column2,
    ImgWrap,
    Img,
    TextWrapper,
    TopLine,
    Heading,
    ValuesOl,

} from './ValuesElements'

const OurValues = () => {
    return (
        <>
            <Layout>
                <ValuesContent>
                    <ValuesRow>
                        <Column1>
                            <ImgWrap>
                                <Img src={require('../../Assets/Images/Rolling.jpg')} />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <TopLine>Our Values</TopLine>
                                <Heading>We treat our values seriously and expect everyone training here to follow them.</Heading>
                                <ValuesOl>
                                    <li>Respect your training partners- we are here to progress and have fun together, not to feed our egos at the expense of others.</li>
                                    <br></br>
                                    <li>Bullying and discrimination will not be tolerated. Everyone should be able to enjoy training here, regardless of their race, sexual orientation, gender or cultural background.</li>
                                    <br></br>
                                    <li>We are not interested in any tribal gym politics. We welcome visitors from other academies and we always encourage cross training.</li>
                                </ValuesOl>
                            </TextWrapper>
                        </Column2>
                    </ValuesRow>
                </ValuesContent>
            </Layout>

        </>
    )
}

export default OurValues
