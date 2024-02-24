import React from 'react';
import InputForm from './InputForm';
import Button from '../buttons/Button';
import Image from 'next/image';
import arrowSmallRight from '../../assets/svgs/arrow-small-right.svg';

function FormContact() {
  return (
    <div>
      <form action="" className="flex flex-col gap-y-2" method="POST">
        <InputForm
          className="rounded-xl min-h-14 border-[1px] border-color-base-6 focus:outline-1 focus:outline-color-base-6 px-2"
          type="text"
          title="Nome"
          name="name"
          id="nameInput"
          autoComplete="on"
          required
        />
        <InputForm
          className="rounded-xl min-h-14 border-[1px] border-color-base-6 focus:outline-1 focus:outline-color-base-6 px-2"
          type="email"
          title="Email"
          name="email"
          id="emailInput"
          required
          autoComplete="on"
        />

        <div className="flex">
          <InputForm
            className="rounded-xl min-h-14 border-[1px] border-color-base-6 focus:outline-1 focus:outline-color-base-6 px-2"
            type="tel"
            title="Telefone"
            name="email"
            id="emailInput"
            placeholder="(00) 00000-0000"
            required
            autoComplete="on"
          />
          <InputForm
            className="rounded-xl min-h-14 border-[1px] border-color-base-6 focus:outline-1 focus:outline-color-base-6 px-2"
            type="text"
            title="CPF"
            name="email"
            id="emailInput"
            required
            placeholder="000.000.000-00"
            autoComplete="on"
          />
        </div>

        <div className="flex flex-col text-xl p-2 gap-2">
          <label className="text-color-base-8" htmlFor="messageInput">
            Mensagem
          </label>
          <textarea
            className="rounded-xl border-[1px] border-color-base-6 focus:outline-1 focus:outline-color-base-6 p-2"
            name="message"
            id="messageInput"
            cols={28}
            rows={8}
            required
          ></textarea>
        </div>

        <Button
          className="flex self-end w-1/4 content-center gap-2 justify-end bg-color-base-8 py-3 px-6 text-color-base-0 rounded-[20px] text-2xl font-semibold tracking-wider me-2"
          type="submit"
        >
          <p className="flex self-center content-center">Enviar</p>
          <Image src={arrowSmallRight} alt="whatsapp icon" width={60} />
        </Button>
      </form>
    </div>
  );
}

export default FormContact;
