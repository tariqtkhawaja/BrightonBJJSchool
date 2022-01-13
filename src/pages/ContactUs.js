import React, { useState } from "react";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ContactSection />
        </>
    )
}
export default ContactUs;
