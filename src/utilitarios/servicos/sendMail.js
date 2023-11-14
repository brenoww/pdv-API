const transporter = require("../../conexoes/nodemailer");

const send = async (to, subject, body) => {
    await transporter.sendMail({
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
        throw error;
    }
};

module.exports = {
    sendMail,
};
