'use server';

import { isEmail, isPhone, isValidCPF } from '@/utils';

export const handleSubmit = async (state: unknown, formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const cpf = formData.get('cpf') as string;
  const message = formData.get('message') as string;

  const data = { name: '', email: '', phone: '', cpf: '', message: '' };
  const error = { name: '', email: '', phone: '', cpf: '', message: '' };

  if (!name || !email || !phone || !cpf || !message) {
    error.email = 'Campo obrigatório!';
    error.cpf = 'Campo obrigatório!';
    error.phone = 'Campo obrigatório!';
    error.message = 'Campo obrigatório!';
    return {
      send: false,
      data,
      error,
    };
  }

  if (!isEmail(email)) {
    error.email = 'Email inválido.';
    return { send: false, data, error };
  }

  if (!isPhone(phone as string)) {
    error.phone = 'Número de telefone inválido.';
    return { send: false, data, error };
  }

  if (!isValidCPF(cpf as string)) {
    error.cpf = 'Número de CPF inválido.';
    return { send: false, data, error };
  }

  data.name = name;
  data.email = email;
  data.phone = phone;
  data.cpf = cpf;
  data.message = message;

  const response = await fetch(process.env.BASE_URL! + '/api/email', {
    method: 'POST',
    headers: {
      'content-type': 'application-json',
    },
    body: JSON.stringify(data),
  });

  const jsonResponse = await response.json();

  if (jsonResponse.statusCode !== 200) {
    error.message =
      'Ocorreu um erro ao tentar envia sua mensagem. Por favor, tente novamente mais tarde.';
    return { send: false, data, error };
  }

  error.message = 'Mensagem enviado com sucesso! Em breve entraremos em contato.';
  return { send: true, data, error };
};
