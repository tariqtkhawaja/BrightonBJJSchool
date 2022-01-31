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
                        <Img src={require('../../Assets/Images/Timetable.jpg')} alt=
                            'Timetable, Monday Gi Fundamentals: 18:30-20:00, Tuesday, Submission Grappling 18:30-20:00, Thursday Gi Fundamentals: 18:30-20:00, Friday Gi Fundamentals: 18:15-19:15, Open Mat: 19:15-20:45' />
                    </ImgWrap>
                    <Footer />
                </TimetableContent>
            </Layout>

        </>
    )
}

export default TimetableSection
