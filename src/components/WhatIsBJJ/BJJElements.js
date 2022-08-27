import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../Navbar/NavbarElements";

export const BjjRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1'  'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px; 
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px; 
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 100vw;
    padding-top: 0;
    padding-bottom: 100px;
    margin-top: 10%;

`;

export const TopLine1 = styled.p`
    color: var(--blue);
    font-size: 1rem;
    line-height: 16px ;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    /* margin-top: 40%; */
`;
export const TopLine2 = styled.p`
    color: var(--blue);
    font-size: 1rem;
    line-height: 16px ;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 20%;
`;

export const Heading = styled.h1` 
    margin-top: 0%;
    margin-bottom: 12px;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 600;
    color: var(--blue);
    
    //iPad Pro
    @media screen and (max-width: 1024px){
        font-size: 2.6rem;
    }
    //mobile
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ImgWrap = styled.div`
    max-width: 555px;
    position: relative;
    height: 100%;
    margin-top: 10%;
    margin-bottom: 24px;

    //iPad Pro
    @media screen and (max-width: 1024px){
    /* height: 100%; */

    }

    @media screen and (max-width: 768px) {
        margin-top: 0%;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    height: 100%;
    border-radius: 8px;


`;

export const BjjContent = styled.div`
    z-index: 3;
    max-width: 1400px;
    position: absolute;
    height: calc(100vh - ${NAVBAR_HEIGHT});
    padding: 8px 24px;
    flex-direction: column;
    align-items: center;
`;


export const BjjP = styled.p`
    margin-top: 100px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    max-width: 600px;
    font-weight: lighter;
    

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

//Accordion Flex Section: 
export const BjjFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden; 
`;

