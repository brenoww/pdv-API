const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

const send = (to, subject, body) => {
    transporter.sendMail({
        from: process.env.MAIL_FROM,
        to,
        subject,
        html: body,
    });
};

const sendMail = async (to, subject, body) => {
    try {
        await send(to, subject, body);
        return "Um email foi enviado com seu pedido";
    } catch (error) {
        throw error; // Lança o erro para ser tratado no bloco catch ao chamar a função
    }
};

module.exports = {
    sendMail,
};

module.exports = send;
