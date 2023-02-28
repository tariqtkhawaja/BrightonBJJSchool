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
                        <Img src={require('../../Assets/Images/Timetable4.jpeg')} alt=
                            'Timetable, Monday Beginners Only with Aaron: 18:00-19:00 Gi Fundamentals wih Aaron: 19:00-20:30, Tuesday, Submission Grappling with Pedro: 18:30-20:00, Wednesday Gi Fundamentals: 11:00-12:00 with Tom, Womens Comp Training with Anjelika 19:30-20:00, Thursday Gi Fundamentals with Tom: 18:30-20:00, Friday Gi Fundamentals with Tom: 18:15-19:15, Gi Intermediate with Aaron: 19:15-20:30, Saturday Wrestling: 12:00 - 13:00,  Sunday Open Mat: 11:00-13:00' />
                    </ImgWrap>
                    <Footer />
                </TimetableContent>
            </Layout>

        </>
    )
}

export default TimetableSection
