import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer` 
    display: flex;
    justify-content: flex-end;
    z-index: 3;
`;

export const FooterWrapper = styled.div` 
    padding: 48px 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
display: flex;
justify-content: space-between;
`;

export const SocialMediaWrap = styled.div`
display:flex;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto; 

@media screen and (max-width:820px) {
    flex-direction: column;
}
`;


export const SocialLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;    
    margin-bottom: 16px;
    /* padding-right: 48px; */
`;

export const WebsiteRights = styled.small`
    color: var(--white);
    margin-bottom: 16px;
    text-align: center;
    padding-left: 48px;
    
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

    @media screen  and (max-width:768px) {
        margin-left: -10%;
    }

    
    @media screen  and (max-width:480px) {
        margin-left: -15%;
    }
`;

export const SocialIconsLink = styled.a` 
    color: var(--white);
    font-size: 24px;
`;