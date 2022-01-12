import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../Navbar/NavbarElements";

export const InfoContainer = styled.div`
    background: #0c0c0c;
    display: grid;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0 30px;
    height: calc(100vh - ${NAVBAR_HEIGHT});
    z-index: 1;
    justify-content: center;
   
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoBg = styled.div`
    /* position: absolute; */
    top: 80px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
`;



export const InfoLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 30px;
    opacity: 40%;

`;
export const InfoRow = styled.div`
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
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 100px;

`;

export const TopLine = styled.p`
    color: var(--blue);
    font-size: 16px;
    line-height: 16px ;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 40%;
`;
export const Heading = styled.h1` 
    margin-top: 0%;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: var(--blue);

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`

export const InfoContent = styled.div`
    z-index: 3;
    max-width: 1400px;
    position: absolute;
    padding: 8px 24px;
    flex-direction: column;
    align-items: center;
`;


export const InfoH1 = styled.div`
    color: #fff;
    font-size: 48px;
    text-align: center;
    margin-top: -15%;
    ;
    
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;


export const InfoP = styled.p`
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

