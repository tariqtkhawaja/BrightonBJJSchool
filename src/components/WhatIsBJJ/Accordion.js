import React, { useState } from 'react';
import { AccordionContent, AccordionItem, AccordionTitle } from './AccordionElements'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <AccordionItem isActive={isActive}>
            <AccordionTitle
                onClick={() => setIsActive(!isActive)}>
                <h3>{title}</h3>
                <span>{isActive ? '-' : '+'}</span>
            </AccordionTitle>
            {isActive && <AccordionContent>{content}</AccordionContent>}
        </AccordionItem>
    );
}

export default Accordion