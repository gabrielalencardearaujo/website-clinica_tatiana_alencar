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
          <h3 className="md:text-5xl sm:text-4xl text-3xl text-color-base-8 ">
            Veja nossos outros contatos{' '}
          </h3>
          <p className="md:text-lg text-md text-color-base-7">
            Fale através dos nossos canais de atendimento. Saiba dos horários de atendimentos e
            dasveja nossos disponibilidades.
          </p>
        </div>
        <hr />
      </div>

      <div className="flex flex-col gap-y-12 my-14">
        <div className="flex md:flex-row flex-col">
          <h4 className="flex gap-2 me-auto xxl:text-2xl xlg:text-xl xl:text-lg sm:text-2xl text-md text-color-base-8">
            <Image src={DateTimeSVG} alt="icon date-time" />
            Horários de atendimento
          </h4>
          <span className="flex pe-2 md:ps-0 ps-8 italic items-center text-color-base-7 gap-2 xxl:text-xl xlg:text-lg xl:text-md sm:text-xl text-md">
            <p>Seg - Sáb</p> / <p>08:00 - 20:00</p>
          </span>
        </div>

        <div className="flex md:flex-row flex-col">
          <h4 className="flex gap-2 me-auto xxl:text-2xl xlg:text-xl xl:text-lg sm:text-2xl text-md text-color-base-8">
            <Image src={PhoneSVG} alt="icon telefone" />
            Telefones
          </h4>
          <span className="flex pe-2 md:ps-0 ps-8 italic items-center text-color-base-7 gap-2 xxl:text-xl xlg:text-lg xl:text-md sm:text-xl text-md">
            <p>2021-8899 </p> / <p>(11) 9 8576-7723</p>
          </span>
        </div>

        <div className="flex md:flex-row flex-col">
          <h4 className="flex gap-2 me-auto xxl:text-2xl xlg:text-xl xl:text-lg sm:text-2xl text-md text-color-base-8">
            <Image src={MailSVG} alt="icon telefone" />
            Email
          </h4>
          <span className="flex pe-2 md:ps-0 ps-8 italic items-center text-color-base-7 gap-2 xxl:text-xl xlg:text-lg xl:text-md sm:text-xl text-md">
            <p>tatialencar@gmail.com</p>
          </span>
        </div>

        <div className="flex md:flex-row flex-col">
          <h4 className="flex gap-2 me-auto xxl:text-2xl xlg:text-xl xl:text-lg sm:text-2xl text-md text-color-base-8">
            <Image src={InstagramSVG} alt="icon telefone" />
            Instagram
          </h4>
          <span className="flex pe-2 md:ps-0 ps-8 italic items-center text-color-base-7 gap-2 xxl:text-xl xlg:text-lg xl:text-md sm:text-xl text-md">
            <p>@tatiiana.estetica</p>
          </span>
        </div>
      </div>
      <hr />

      <div className="flex flex-col gap-3 my-14">
        <h4 className="sm:text-2xl text-md flex gap-2 text-color-base-8">
          <Image src={LocationSVG} alt="icon telefone" width={32} />
          Endereço
        </h4>
        <span className="italic text-color-base-7 sm:text-lg text-sm w-2/3 ms-10">
          <p>Rua Ali na Esquina, 100 - Vila Carrão - São Paulo - SP,</p>
          <p>Ao lado do metrô Vila Carrão</p>
        </span>
      </div>
    </>
  );
}

export default InfoContacts;
