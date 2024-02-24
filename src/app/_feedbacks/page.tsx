'use client';
import { SlideBackground } from '@/components/gallery/SectionSlide.style';
import React from 'react';
import Faxada from '../../assets/img/gallery/faxada-clinica.jpg';
import ImageClient1 from '../../assets/img/feedbacks/img-client-1.png';
import ImageClient2 from '../../assets/img/feedbacks/img-client-2.png';
import SlidersFeedbacks from '@/components/slides/SlidersFeedbacks';

const FeedbackClients = [
  {
    _id: 1,
    name: 'Gabriel Alencar',
    comment: 'Muito bom atendimento, adorei!',
    date: '12/02/2024',
    image: ImageClient1,
  },
  {
    _id: 2,
    name: 'Pickles Rick',
    comment: 'Achei que seria um pessimo atendimento, quando cheguei lá, vi que era verdade!',
    date: '02/01/2024',
    image: ImageClient2,
  },
  {
    _id: 3,
    name: 'Pickles Rick',
    comment: 'Achei que seria um pessimo atendimento, quando cheguei lá, vi que era verdade!',
    date: '02/01/2024',
    image: ImageClient2,
  },
  {
    _id: 4,
    name: 'Pickles Rick',
    comment: 'Achei que seria um pessimo atendimento, quando cheguei lá, vi que era verdade!',
    date: '02/01/2024',
    image: ImageClient2,
  },
  {
    _id: 5,
    name: 'Pickles Rick',
    comment: 'Achei que seria um pessimo atendimento, quando cheguei lá, vi que era verdade!',
    date: '02/01/2024',
    image: ImageClient2,
  },
  {
    _id: 2,
    name: 'Pickles Rick',
    comment: 'Achei que seria um pessimo atendimento, quando cheguei lá, vi que era verdade!',
    date: '02/01/2024',
    image: ImageClient2,
  },
  {
    _id: 3,
    name: 'Pickles Rick',
    comment: 'Achei que seria um pessimo atendimento, quando cheguei lá, vi que era verdade!',
    date: '02/01/2024',
    image: ImageClient2,
  },
  {
    _id: 4,
    name: 'Pickles Rick',
    comment: 'Achei que seria um pessimo atendimento, quando cheguei lá, vi que era verdade!',
    date: '02/01/2024',
    image: ImageClient2,
  },
  {
    _id: 5,
    name: 'Pickles Rick',
    comment: 'Achei que seria um pessimo atendimento, quando cheguei lá, vi que era verdade!',
    date: '02/01/2024',
    image: ImageClient2,
  },
];

function Feedbacks() {
  return (
    <section className="min-h-[860px]" id="#contactSection">
      <div className="flex flex-col gap-2">
        <div className="self-end mr-20">
          <h2 className="text-5xl text-color-base-7">Nossos clientes.</h2>
          <h4 className="text-2xl text-color-base-4">Veja oque nossos clientes falam sobre nós</h4>
        </div>
      </div>

      <article className="flex mt-10 gap-x-16 relative ">
        <SlideBackground
          background={Faxada.src}
          className="w-full rounded-[20px] h-[620px] flex p-10"
        ></SlideBackground>
        <div
          className="flex w-[95%] gap-20 z-10 backdrop-opacity-15 absolute top-10 left-10 h-[540px] items-center"
          id="slides"
        >
          <SlidersFeedbacks feedbacks={FeedbackClients} />
        </div>
      </article>
    </section>
  );
}

export default Feedbacks;
