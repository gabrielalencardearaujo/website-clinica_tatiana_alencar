import * as nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});

export const optionsMail = (data) => {
  return {
    from: `Gabriel Alencar <${data.email}>`,
    to: `Gabriel Alencar <alencar.gabriel64@gmail.com>`,
    subject: `Website Clinica - ${data.name}`,
    html: configMessage(data),
  };
};

const configMessage = (data) => {
  return `
  <strong>Nome do remetente:</strong> ${data.name} <br>
  <strong>Email do remetente:</strong> ${data.email} <br>
  <strong>CPF do remetente:</strong> ${data.cpf} <br>
  <strong>Telefone do remetente:</strong> ${data.phone} <br><br>

  <strong>Mensagem:</strong><br>

  ${data.message}
  `;
};
