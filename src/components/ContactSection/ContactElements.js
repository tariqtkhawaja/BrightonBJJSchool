import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../Navbar/NavbarElements";


export const ContactContent = styled.div`
    z-index: 3;
    max-width: 1200px;
// height: calc(100vh + ${NAVBAR_HEIGHT}); 
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
    margin-top: 80%;
    @media screen and (max-width: 820px) {
        margin-top: 25%;
    }

    @media screen and (max-width: 768px) {
        margin-top: 50%;
    }

    @media screen and (max-width: 480px) {
        margin-top: 100%;
    }

`;

export const ContactP = styled.div`
    color: var(--white);
    text-align: center;
    font-size: 20px;
`;

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
display: flex;
justify-content: space-between;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto; 

@media screen and (max-width:820px) {
    flex-direction: column;
}
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconsLink = styled.a` 
    color: var(--white);
    font-size: 24px;
`;