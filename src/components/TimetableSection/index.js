import React from 'react'
import Footer from '../Footer'
import Layout from '../Layout'
import {
    TimetableContent,
    TopLine,
    ImgWrap,
    Img
} from './TimetableElements'

const TimetableSection = () => {
    return (
        <>
            <Layout>
                <TimetableContent>
                    <TopLine>Timetable</TopLine>
                    <ImgWrap>
                        <Img src={require('../../Assets/Images/Timetable.PNG')} />
                    </ImgWrap>
                    <Footer />
                </TimetableContent>
            </Layout>

        </>
    )
}

export default TimetableSection
