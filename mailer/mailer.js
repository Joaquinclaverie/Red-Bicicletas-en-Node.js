const nodemailer = require('nodemailer');

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'hassan.frami@ethereal.email',
        pass: 'gJjBpQQsVhK4j8KU7p'
    }
};

module.exports = nodemailer.createTransport(mailConfig);