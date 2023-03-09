import React from 'react'
import Accordion from './Accordion'
import { accordionData } from './AccordionData';

const AccordionComponent = () => {

    return (
            <>
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </>
    );
};

export default AccordionComponent