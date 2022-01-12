import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../Navbar/NavbarElements";


export const LayoutContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: calc(100vh - ${NAVBAR_HEIGHT});
    position: relative;
    z-index: 1;
    overflow: auto;
`;

export const LayoutBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const LayoutLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 30px;
    opacity: 40%;
`;