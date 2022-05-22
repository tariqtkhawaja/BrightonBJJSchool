import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../Navbar/NavbarElements";

export const TimetableContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    height: calc(100vh - ${NAVBAR_HEIGHT});
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
    margin-top: 18%;
`;

export const ImgWrap = styled.div`
    max-width: 550px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 8px;

`;