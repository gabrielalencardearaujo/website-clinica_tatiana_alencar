import React from 'react';
import InputForm from './InputForm';
import Button from '../buttons/Button';
import Image from 'next/image';
import arrowSmallRight from '../../assets/svgs/arrow-small-right.svg';

function FormContact() {
  return (
    <div>
      <form action="" className="flex flex-col gap-y-2" method="POST">
        <InputForm type="text" title="Nome" name="name" id="nameInput" autoComplete="on" required />
        <InputForm
          type="email"
          title="Email"
          name="email"
          id="emailInput"
          required
          autoComplete="on"
        />

        <div className="grid md:grid-cols-2 grid-cols-1">
          <InputForm
            type="tel"
            title="Telefone"
            name="email"
            id="emailInput"
            placeholder="(00) 00000-0000"
            required
            autoComplete="on"
          />
          <InputForm
            type="text"
            title="CPF"
            name="email"
            id="emailInput"
            required
            placeholder="000.000.000-00"
            autoComplete="on"
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
          ></textarea>
        </div>

        <Button
          className="flex self-end  content-center gap-2 justify-end bg-color-base-8 xl:py-3 xl:px-6 py-2 px-4 text-color-base-0 rounded-[20px] md:text-2xl text-lg font-semibold tracking-wider me-2"
          type="submit"
        >
          <p className="flex self-center content-center">Enviar</p>
          <Image src={arrowSmallRight} alt="whatsapp icon" className="md:w-16 w-12" />
        </Button>
      </form>
    </div>
  );
}

export default FormContact;
