import styled from "styled-components";

export const TimetableContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TopLine = styled.p`
    color: var(--blue);
    font-size: 16px;
    line-height: 16px ;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 44%;
`;

export const ImgWrap = styled.div`
    max-width: 100%;
    height: 100%;

    @media screen and (max-width: 768px){
        min-height: 100vh;
    }

    @media screen and (max-width: 480px){
        min-height: 100vh;
        width: 510px;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 8px;


`;