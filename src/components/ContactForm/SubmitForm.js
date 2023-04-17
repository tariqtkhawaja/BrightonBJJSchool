const nodemailer = require('nodemailer');

exports.handler = async (event, context, callback) => {
    const { name, email, message } = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.REACT_APP_USERNAME,
            pass: process.env.REACT_APP_USERNAME
        }
    });

    let info = await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Thank you for your submission',
        text: `Hi ${name}, thank you for your submission. We will get back to you as soon as possible.`,
        html: `<p>Hi ${name},</p><p>Thank you for your submission. We will get back to you as soon as possible.</p>`
    });

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(info)
    });
};
