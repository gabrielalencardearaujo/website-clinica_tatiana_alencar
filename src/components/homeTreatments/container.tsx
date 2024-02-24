'use client';
import React from 'react';
import CardTreatments from './CardTreatments';
import background1 from '../../assets/img/img-depilacao.png';
import background2 from '../../assets/img/img-botox.png';
import background3 from '../../assets/img/img-PEIM.png';
import background4 from '../../assets/img/img-laserTerapia.png';
import background5 from '../../assets/img/img-labial.png';

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
          <CardTreatments
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
    </section>
  );
}

export default Treatments;
