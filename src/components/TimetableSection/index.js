import React from 'react'
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
                </TimetableContent>
            </Layout>

        </>
    )
}

export default TimetableSection
