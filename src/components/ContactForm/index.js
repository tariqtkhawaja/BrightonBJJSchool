import React, { useState } from 'react'
import {
    FormWrapper,
    FormContent,
    FormLabel,
    FormInput,
    FormTextArea,
    FormButton,
    FormResult
} from './FormElements'



const Form = () => {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting ->");
        const { name, email, subject, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };
        let response = await fetch(process.env.PORT_KEY || "http://localhost:5000/contact-us", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status)

    }

    return (
        <>
            <FormWrapper>
                <FormContent onSubmit={handleSubmit}>
                    <FormResult></FormResult>
                    <FormInput type="text" id="name" placeholder='Full Name' name="name" required></FormInput><br></br>
                    <FormInput type='email' id="email" placeholder='Email' required></FormInput><br></br>
                    <FormInput type='text' id="subject" placeholder='Subject' required></FormInput><br></br>
                    <FormLabel for="message">Message</FormLabel><br></br>
                    <FormTextArea id="message" placeholder="Please write your message here..." rows="14" cols="50" required></FormTextArea><br></br>
                    <FormButton type="submit" id="submit">{status}</FormButton><br></br>
                </FormContent>
            </FormWrapper>

        </>
    )
}

export default Form
