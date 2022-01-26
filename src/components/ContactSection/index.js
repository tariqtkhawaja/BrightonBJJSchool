import React from 'react'
import Layout from '../Layout'
import Form from '../ContactForm'
import { BjjGoogleMap } from './GoogleMap'
import {
    ContactContent,
    TextWrapper,
    TopLine1,
    TopLine2,

} from './ContactElements'
import Footer from '../Footer'



const ContactSection = () => {
    return (
        <>
            <Layout>
                <ContactContent>
                    <TextWrapper>
                        <TopLine1>Contact Us</TopLine1>
                        <Form />
                        <TopLine2>Find Us</TopLine2>
                    </TextWrapper>
                    <BjjGoogleMap />
                    <Footer />
                </ContactContent>
            </Layout>

        </>
    )
}

export default ContactSection
