import styled from "styled-components";

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 20%;

    }
`;

export const HeroH1 = styled.div`
    
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

export const HeroP = styled.p`
    margin-top: 400px;
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