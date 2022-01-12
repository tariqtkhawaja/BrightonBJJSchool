import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PricesSection from "../components/PricesSection";
import Sidebar from "../components/Sidebar";


const Prices = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <PricesSection />
        </>
    )
}
export default Prices;
