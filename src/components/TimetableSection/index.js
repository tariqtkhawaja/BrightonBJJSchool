import React from 'react'
import Footer from '../Footer'
import Layout from '../Layout'
import {
    ClassTime,
    TimetableContent,
    TopLine,
    TimetableContainer,
    TimetableHeader,
    DayOfTheWeek,
    TimetableCell,
    TimetableSubHeader,
    TimetableRow,

} from './TimetableElements'

const TimetableSection = () => {
    return (
        <>
            <Layout>
                <TimetableContent>
                    <TopLine>Timetable</TopLine>
                    <TimetableContainer>
                        <TimetableHeader>BRIGHTON BJJ</TimetableHeader>
                        <TimetableSubHeader>TIMETABLE</TimetableSubHeader>
                        <TimetableRow>
                            <DayOfTheWeek>MONDAY</DayOfTheWeek>
                        </TimetableRow>
                        <TimetableCell><ClassTime>11:00-12:00</ClassTime> GI TAKEDOWNS CLASS  WITH AARON</TimetableCell>
                        <TimetableCell> <ClassTime>18:00-19:00</ClassTime> GI BEGINNERS ONLY WITH AARON</TimetableCell>
                        <TimetableCell><ClassTime>19:00-20:30</ClassTime> GI FUNDAMENTALS WITH AARON</TimetableCell>
                        <TimetableRow>
                            <DayOfTheWeek>TUESDAY</DayOfTheWeek>
                        </TimetableRow>
                        <TimetableCell><ClassTime>18:30-20:00</ClassTime> NO GI WITH AARON/TOM</TimetableCell>
                        <TimetableRow>
                            <DayOfTheWeek>WEDNESDAY</DayOfTheWeek>
                        </TimetableRow>
                        <TimetableCell><ClassTime>11:00-12:00</ClassTime> GI FUNDAMENTALS WITH TOM</TimetableCell>
                        <TimetableCell><ClassTime>18:30-19:30</ClassTime> GI BEGINNERS ONLY WITH ANGELIKA</TimetableCell>
                        <TimetableCell><ClassTime>19:40-21:00</ClassTime> NO GI WITH DINO</TimetableCell>
                        <TimetableRow>
                            <DayOfTheWeek>THURSDAY</DayOfTheWeek>
                        </TimetableRow>
                        <TimetableCell><ClassTime>18:30-20:00</ClassTime> GI FUNDAMENTALS WITH TOM</TimetableCell>
                        <TimetableRow>
                            <DayOfTheWeek>FRIDAY</DayOfTheWeek>
                        </TimetableRow>
                        <TimetableCell><ClassTime>18:30-20:00</ClassTime> GI INTERMEDIATE WITH AARON</TimetableCell>
                        <TimetableRow>
                            <DayOfTheWeek>SATURDAY</DayOfTheWeek>
                        </TimetableRow>
                        <TimetableCell><ClassTime>12:00-13:00</ClassTime> WRESTLING FOR BJJ WITH DINO</TimetableCell>
                        <TimetableRow>
                            <DayOfTheWeek>SUNDAY</DayOfTheWeek>
                        </TimetableRow>
                        <TimetableCell><ClassTime>11:00-13:00</ClassTime> OPEN MAT</TimetableCell>
                    </TimetableContainer>

                    <Footer />
                </TimetableContent>
            </Layout >

        </>
    )
}

export default TimetableSection
