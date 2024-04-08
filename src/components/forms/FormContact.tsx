import React, { useEffect, useState } from 'react';
import InputForm from './InputForm';
import Button from '../buttons/Button';
import Image from 'next/image';
import arrowSmallRight from '../../assets/svgs/arrow-small-right.svg';
import { useFormState, useFormStatus } from 'react-dom';
import { handleSubmit } from '@/actions/contact';
import LoadingAnimation from '../loading';

const ButtonSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="flex self-end items-center gap-2 justify-end bg-color-base-8 py-3 px-6 text-color-base-0 rounded-[20px] text-2xl font-semibold tracking-wider me-2 min-w-52 min-h-16"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <LoadingAnimation macro={false} />
      ) : (
        <p className="flex items-center">
          Enviar
          <Image src={arrowSmallRight} alt="whatsapp icon" className="md:w-16 w-12" />
        </p>
      )}
    </Button>
  );
};

function FormContact() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [cpf, setCpf] = useState('');

  const [state, action] = useFormState(handleSubmit, {
    send: false,
    data: {
      phone: '',
      cpf: '',
      email: '',
      name: '',
      message: '',
    },
    error: {
      name: '',
      email: '',
      phone: '',
      cpf: '',
      message: '',
    },
  });

  const formatarTelefone = (num: string) => {
    num = num.replace(/\D/g, '');
    return num.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const handlePhone = (event) => {
    const { value } = event.target;
    setPhone(formatarTelefone(value));
  };

  useEffect(() => {
    if (state.send) {
      setName('');
      setEmail('');
      setMessage('');
      setCpf('');
      setPhone('');
    }
  }, [state.send]);

  return (
    <div>
      <form action={action} className="flex flex-col gap-y-2" method="POST">
        <InputForm
          type="text"
          title="Nome"
          name="name"
          id="nameInput"
          autoComplete="on"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
          error={state.error.name}
        />
        <InputForm
          type="email"
          title="Email"
          name="email"
          id="emailInput"
          required
          autoComplete="on"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          error={state.error.email}
        />

        <div className="grid md:grid-cols-2 grid-cols-1">
          <InputForm
            type="tel"
            title="Telefone"
            name="phone"
            id="phoneInput"
            placeholder="(00) 00000-0000"
            required
            value={phone}
            onChange={handlePhone}
            error={state.error.phone}
          />
          <InputForm
            type="text"
            title="CPF"
            name="cpf"
            id="cpfInput"
            required
            value={cpf}
            onChange={({ target }) => setCpf(target.value)}
            placeholder="000.000.000-00"
            autoComplete="on"
            error={state.error.cpf}
          />
        </div>

        <div className="flex flex-col md:text-xl text-md p-2 gap-2">
          <label className="text-color-base-8" htmlFor="messageInput">
            Mensagem
          </label>
          <textarea
            className="rounded-xl border-[1px] border-color-base-6 focus:outline-1 focus:outline-color-base-6 p-2 md:text-lg text-sm"
            name="message"
            id="messageInput"
            cols={28}
            rows={8}
            required
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          ></textarea>
        </div>

        <div className="flex xm:flex-col lg:flex-row justify-between lg:gap-4 xm:gap-6">
          <p
            className={`text-lg ms-2 mt-2 ${state.send ? 'text-color-success' : 'text-color-error'}`}
          >
            {state.error.message}
          </p>
          <ButtonSubmit />
        </div>
      </form>
    </div>
  );
}

export default FormContact;
