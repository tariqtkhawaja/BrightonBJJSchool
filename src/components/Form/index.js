import React from 'react'
import { FormWrapper } from './FormElements'



const Form = () => {
    return (
        <>
            <FormWrapper>
                <form>
                    <label for='name'>Name</label><br></br>
                    <input type="text" id="name" placeholder='Full Name' name="name" required></input><br></br>
                    <label for='email'>Email</label><br></br>
                    <input type='email' id="email" placeholder='Email' required></input><br></br>
                    <label for="message">Message</label><br></br>
                    <textarea id="message" placeholder="message" rows="4" cols="50" required></textarea><br></br>
                    <button type="submit" id="submit">Submit</button>
                </form>

            </FormWrapper>

        </>
    )
}

export default Form
