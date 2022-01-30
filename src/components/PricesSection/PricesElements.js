import styled from "styled-components";

export const PricesRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2' 'col1'` : `'col2 col2'  'col1 col1'`)};
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

    @media screen and (max-width: 768px) {
        margin-top: 200%;
    }

    @media screen and (max-width: 480px) {
        margin-top: 220%;
    }

`;

export const TopLine1 = styled.p`
    color: var(--blue);
    font-size: 16px;
    line-height: 16px ;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 40%;
`;
export const TopLine2 = styled.p`
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
    margin-top: 100%;

    @media screen and (max-width: 768px) {
        margin-top: -20%;
    }

    @media screen and (max-width: 480px) {
        margin-top: -30%;
    }

`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 8px;
    height: 30%;

`;

export const PricesContent = styled.div`
    z-index: 3;
    max-width: 1400px;
    position: absolute;
    padding: 8px 24px;
    flex-direction: column;
    align-items: center;
`;


export const PricesUl = styled.ul`
    list-style-type: none;
    margin-top: 24px;
    color: #fff;
    font-size: 20px;
    text-align: left;
    max-width: 600px;
    font-weight: lighter;
    

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;
export const PricesP = styled.p`
    margin-top: 24px;
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