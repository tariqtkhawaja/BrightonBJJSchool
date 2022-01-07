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
    position: absolute;
    top: 80px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;



export const InfoLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 30px;
    opacity: 40%;

`;


export const InfoContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr) ;
    flex-direction: column;
    align-items: center;
`;


export const InfoH1 = styled.div`
    color: #fff;
    font-size: 48px;
    text-align: center;
    margin-top: -15%;
    
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
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-weight: lighter;
    

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

