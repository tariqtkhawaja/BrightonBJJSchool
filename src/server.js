const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { google } = require("googleapis");

dotenv.config();

const OAuth2 = google.auth.OAuth2;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const createTransporter = async () => {

    const oauth2Client = new OAuth2(
        process.env.REACT_APP_GMAIL_CLIENT_ID,
        process.env.REACT_APP_GMAIL_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.REACT_APP_GMAIL_REFRESH_TOKEN,
    });


    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) {
                reject("Failed to create access token");
            }
            resolve(token);
        });
    });
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.REACT_APP_USERNAME,
            accessToken,
            clientId: process.env.REACT_APP_GMAIL_CLIENT_ID,
            clientSecret: process.env.REACT_APP_GMAIL_SECRET,
            refresh_token: process.env.REACT_APP_GMAIL_REFRESH_TOKEN
        }
    });

    return transporter;

}



//     createTransporter.verify((error) => {
//     if (error) {
//         console.log("contact email verify error: ", error);
//     } else {
//         console.log("Ready to Send");
//     }
// });


//emailOptions - who sends what to whom
const sendEmail = async (mail, res) => {
    try {
        let emailTransporter = await createTransporter();
        emailTransporter.sendMail(mail,  => {
    res.json({ status: "Message Sent" });
        
    catch (error) {
        res.json({ status: "ERROR " });
        console.log(error)
    }
}



    // let emailTransporter = await createTransporter();
    // emailTransporter.sendMail(mail, (error) => {
    //     if (error) {
    //         res.json({ status: "ERROR " });
    //         console.log('Error', (error));
    //     } else {
    //         res.json({ status: "Message Sent" });
    //     }
    // });

};

router.post("/contact-us", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.REACT_APP_USERNAME,
        subject: `Contact Form Submission: ${subject}`,
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };
    // createTransporter.sendMail(mail, (error) => {
    //     if (error) {
    //         console.log("error: ", error);
    //         res.json({ status: "ERROR" });
    //     } else {
    //         console.log("Success! ");
    //         res.json({ status: "Message Sent" });
    //     }
    // });


    sendEmail(mail, res);
});
