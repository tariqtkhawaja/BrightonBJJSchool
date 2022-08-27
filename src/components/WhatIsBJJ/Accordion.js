import React, { useState } from 'react';
import { Div } from './AccordionElements'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title"
                    onClick={() => setIsActive(!isActive)}>
                    <Div>{title}</Div>
                    <Div>{isActive ? '-' : '+'}</Div>
                </div>
                {isActive && <div className="accordion-content">{content}</div>}
            </div>
        </div>

    );
}

export default Accordion