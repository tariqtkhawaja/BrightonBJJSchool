import React from 'react'
import Accordion from './Accordion'
import { accordionData } from './AccordionData';

const AccordionComponent = () => {

    return (
        <div>

            <div className='accordion'>
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    );
};

export default AccordionComponent