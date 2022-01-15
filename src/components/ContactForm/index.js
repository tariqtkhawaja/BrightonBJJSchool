import React, { useState } from 'react'
import {
    FormWrapper,
    FormContent,
    FormLabel,
    FormInput,
    FormTextArea,
    FormButton,
    FormResultWrapper,
    FormResultP,
    FormResultCloseButton
} from './FormElements'
import { MdClose } from 'react-icons/md'


const RESPONSE_MESSAGE = {
    success: "Success! Your email has been sent!",
    error: "Oops! There was an error sending your email!",

}
const Form = () => {
    const [formResultStatus, setFormResultStatus] = useState({
        status: "idle",
        display: false,


    });
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
        let result =  response;
        if (result.status === 200) {
            setFormResultStatus({
                status: "success",
                display: true,
            });
        } else {
            setFormResultStatus({
                status: "error",
                display: true,
            })
        }

    }

    return (
        <>
            <FormWrapper>
                <FormContent onSubmit={handleSubmit}>
                    <FormInput type="text" id="name" placeholder='Full Name' name="name" required></FormInput><br></br>
                    <FormInput type='email' id="email" placeholder='Email' required></FormInput><br></br>
                    <FormInput type='text' id="subject" placeholder='Subject' required></FormInput><br></br>
                    <FormLabel for="message">Message</FormLabel><br></br>
                    <FormTextArea id="message" placeholder="Please write your message here..." rows="14" cols="50" required></FormTextArea><br></br>
                    <FormButton type="submit" id="submit">{status}</FormButton><br></br>
                    {formResultStatus.display && (<FormResultWrapper>
                        <FormResultP>
                            {RESPONSE_MESSAGE[formResultStatus.status]}
                        </FormResultP>
                        <FormResultCloseButton onClick={() => setFormResultStatus(false)}>
                            <MdClose />
                        </FormResultCloseButton>
                    </FormResultWrapper>)}
                </FormContent>
            </FormWrapper>

        </>
    )
}

export default Form
