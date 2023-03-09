import styled from "styled-components";
import { BjjP } from "./BJJElements";

export const AccordionDrawer = styled.div`
    display: block;
`;

export const AccordionItem = styled.button`
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    border: ${({ isActive }) => (isActive ? '0.1rem solid var(--blue)' : 'none')};
width: 100%;
background-color: var(--gray);
:hover {
    border: 0.1rem solid var(--blue);
};

`;

export const AccordionTitle = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
color: var(--blue);
font-size: 1rem;
line-height: 1.5;
font-weight: 700;
letter-spacing: 1.4px;
width: 100%;
text-transform: uppercase;
    h3 {
    text-align: left;
}

`;

export const AccordionContent = styled(BjjP)`
max-width: unset;
text-align: left;
margin: 1rem 0 0;

`;
