import styled from "styled-components";


export const FormWrapper = styled.div`
    max-width: 100vw;
    padding-top: 0;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    margin-top: 20%;
    z-index: 3;
    

    @media screen and (max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;


export const FormContent = styled.form` 
    width: 100%;
    background: #f0f0f0;
    border-radius: 25px;
    padding: 20px;
    padding-bottom: 48px;
`;

export const FormLabel = styled.div` 
margin-top: 16px;
    
    label {
    color: var(--black);
    font-size: 20px;
}
    
`;

export const FormInput = styled.input` 
    background: none;
    border: none;
    border-bottom: 1px solid;
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-top: 16px;
`;

export const FormTextArea = styled.textarea`
    background: none;
    border: none;
    font-size: 1rem;
`;

export const FormButton = styled.button`
    color: var(--blue);
    background: var(--black);
    text-align: center;
    width: 100%;
    height: 10%;
    font-size: 16px;
    line-height: 16px ;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 16px;
    margin-top: 16px;
    border-radius: 25px;

    :hover { 
        background: var(--blue);
        border: none;
        color: var(--black);
        cursor: pointer;
    }
`;

export const FormResult = styled.div`

`;