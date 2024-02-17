import React from 'react';
import DateTimeSVG from '../../../assets/svgs/date-time-icon.svg';
import PhoneSVG from '../../../assets/svgs/phone-icon.svg';
import MailSVG from '../../../assets/svgs/mail-icon.svg';
import InstagramSVG from '../../../assets/svgs/intagram-icon.svg';
import LocationSVG from '../../../assets/svgs/location.svg';
import Image from 'next/image';

function InfoContacts() {
  return (
    <>
      <div className="flex flex-col gap-y-16 mt-4">
        <div className="flex flex-col gap-y-6">
          <h3 className="text-5xl text-color-base-8 ">Veja nossos outros contatos </h3>
          <p className="text-lg text-color-base-7">
            Fale através dos nossos canais de atendimento. Saiba dos horários de atendimentos e
            dasveja nossos disponibilidades.
          </p>
        </div>
        <hr />
      </div>

      <div className="flex flex-col gap-y-12 my-14">
        <div className="flex">
          <h4 className="flex gap-2 me-auto text-2xl text-color-base-8">
            <Image src={DateTimeSVG} alt="icon date-time" />
            Horários de atendimento
          </h4>
          <span className="flex pe-2 italic text-color-base-7 gap-2 text-xl">
            <p>Seg - Sáb</p> / <p>08:00 - 20:00</p>
          </span>
        </div>

        <div className="flex">
          <h4 className="flex gap-2 me-auto text-2xl text-color-base-8">
            <Image src={PhoneSVG} alt="icon telefone" />
            Telefones
          </h4>
          <span className="flex pe-2 italic text-color-base-7 gap-2 text-xl">
            <p>2021-8899 /</p> / <p>(11) 9 8576-7723</p>
          </span>
        </div>

        <div className="flex">
          <h4 className="flex gap-2 me-auto text-2xl text-color-base-8">
            <Image src={MailSVG} alt="icon telefone" />
            Email
          </h4>
          <span className="flex pe-2 italic text-color-base-7 gap-2 text-xl">
            <p>tatialencar@gmail.com</p>
          </span>
        </div>

        <div className="flex">
          <h4 className="flex gap-2 me-auto text-2xl text-color-base-8">
            <Image src={InstagramSVG} alt="icon telefone" />
            Instagram
          </h4>
          <span className="flex pe-2 italic text-color-base-7 gap-2 text-xl">
            <p>@tatiiana.estetica</p>
          </span>
        </div>
      </div>
      <hr />

      <div className="flex flex-col gap-3 my-14">
        <h4 className="text-2xl flex gap-2  text-color-base-8">
          <Image src={LocationSVG} alt="icon telefone" width={32} />
          Endereço
        </h4>
        <span className="italic text-color-base-7 text-lg w-2/3 ms-10">
          <p>Rua Ali na Esquina, 100 - Vila Carrão - São Paulo - SP,</p>
          <p>Ao lado do metrô Vila Carrão</p>
        </span>
      </div>
    </>
  );
}

export default InfoContacts;
