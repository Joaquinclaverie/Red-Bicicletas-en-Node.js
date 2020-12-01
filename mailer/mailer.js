const nodemailer = require('nodemailer');

const mailConfig = {
    host: 'smtp.ethereal.email',
    secure: false,
    port: 587,
    auth: {
        user: 'hassan.frami@ethereal.email',
        pass: 'gJjBpQQsVhK4j8KU7p'
    },
    tls: {
        rejectUnauthorized: false
    }
};

module.exports = nodemailer.createTransport(mailConfig);