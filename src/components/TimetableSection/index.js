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
                        <Img src={require('../../Assets/Images/Timetable2.jpg')} alt=
                            'Timetable, Monday Gi Fundamentals wih Aaron: 18:30-20:00, Tuesday, Submission Grappling with Pedro: 18:30-20:00, Thursday Gi Fundamentals with Tom: 18:30-20:00, Friday Gi Fundamentals with Tom: 18:15-19:15, Gi Intermediate with Aaron: 19:15-20:30, Sunday Open Mat: 11:00-13:00' />
                    </ImgWrap>
                    <Footer />
                </TimetableContent>
            </Layout>

        </>
    )
}

export default TimetableSection
