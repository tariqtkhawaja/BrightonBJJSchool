const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const dotenv = require("dotenv");


dotenv.config();

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {

    const oauth2Client = new OAuth2(
        process.env.REACT_APP_GMAIL_CLIENT_ID,
        process.env.REACT_APP_GMAIL_CLIENT_SECRET,
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
            clientSecret: process.env.REACT_APP_GMAIL_CLIENT_SECRET,
            refresh_token: process.env.REACT_APP_GMAIL_REFRESH_TOKEN
        }
    });
    return transporter;

}
exports.handler = async function (event, context, callback) {

    let data = JSON.parse(event.body)
    const transporter = await createTransporter()


     transporter.sendMail({
        from: data.email,
        to: process.env.REACT_APP_USERNAME,
        subject: `Contact Form Submission: ${data.subject}`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function (error, info) {
        if (error) {
            console.log("Test", error);
            callback(error);
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    'result': 'success'
                })
            });
        }
    });
}
