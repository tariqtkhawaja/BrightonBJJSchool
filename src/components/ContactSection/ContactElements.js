import styled from "styled-components";

export const ContactContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden; 
`;

export const TopLine1 = styled.p`
    color: var(--blue);
    font-size: 16px;
    line-height: 16px ;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 16px;
`;
export const TopLine2 = styled.p`
    color: var(--blue);
    font-size: 16px;
    line-height: 16px ;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 16px;
`;



export const TextWrapper = styled.div`
    max-width: 100vw;
    padding-top: 0;
    padding-bottom: 100px;
    margin-top: 75%;

    @media screen and (max-width: 768px) {
        margin-top: 200%;
    }

    @media screen and (max-width: 480px) {
        margin-top: 240%;
    }

`;

