'use client';
import React from 'react';
import IllustrativeCard from './IllustrativeCard';
import background1 from '../../assets/img/img-depilacao.png';
import background2 from '../../assets/img/img-botox.png';
import background3 from '../../assets/img/img-PEIM.png';
import background4 from '../../assets/img/img-laserTerapia.png';
import background5 from '../../assets/img/img-labial.png';
import Image from 'next/image';
import Link from 'next/link';
import arrowRight from '../../assets/svgs/arrow-small-right.svg';

const test = [
  {
    id: 1,
    title: 'Depilação',
    slug: 'depilacao',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    promotion: '3 Sessões',
    backgroundImage: background1,
  },
  {
    id: 1,
    title: 'Botox',
    slug: 'depilacao',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    promotion: '1 Sessão',
    backgroundImage: background2,
    margin: '-114px',
  },
  {
    id: 1,
    title: 'PEIM',
    slug: 'depilacao',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    promotion: '5 Sessões',
    backgroundImage: background3,
    margin: '70px',
  },
  {
    id: 1,
    title: 'LaserTerapia',
    slug: 'depilacao',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    promotion: '2 Sessões',
    backgroundImage: background4,
    margin: '-80px',
  },
  {
    id: 1,
    title: 'Preenchimento Labial',
    slug: 'depilacao',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    promotion: '1 Sessão',
    backgroundImage: background5,
    margin: '20px',
  },
];

function Treatments() {
  const [status, setStatus] = React.useState(test[0].title);

  return (
    <section className="min-h-[860px]" id="#treatmentSection">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl text-color-base-7">Nossas especialidades </h2>
        <h4 className="text-2xl text-color-base-4">
          Confira nossos tratamentos mais solicitados e recomendados
        </h4>
      </div>
      <article className="flex mt-40 gap-x-8">
        {test.map((data) => (
          <IllustrativeCard
            key={data.id}
            title={data.title}
            subTitle={data.subTitle}
            setValue={setStatus}
            value={status}
            backgroundImage={data.backgroundImage}
            margin={data.margin}
            promotion={data.promotion}
          />
        ))}
      </article>
      <div className="flex justify-end mt-6">
        <Link
          href={'/treatments'}
          className="flex content-center gap-2 justify-center bg-color-base-8 py-2 px-4 text-color-base-0 rounded-[20px] text-xl font-semibold"
        >
          <p className="self-center">Veja Mais</p>
          <Image src={arrowRight} alt="arrow right" />
        </Link>
      </div>
    </section>
  );
}

export default Treatments;
