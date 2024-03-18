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
    id: 2,
    title: 'Botox',
    slug: 'botox',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    promotion: '1 Sessão',
    backgroundImage: background2,
    margin: '-114px',
  },
  {
    id: 3,
    title: 'PEIM',
    slug: 'peim',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    promotion: '5 Sessões',
    backgroundImage: background3,
    margin: '70px',
  },
  {
    id: 4,
    title: 'Laser Terapia',
    slug: 'laser-terapia',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    promotion: '2 Sessões',
    backgroundImage: background4,
    margin: '-80px',
  },
  {
    id: 5,
    title: 'Preenchimento Labial',
    slug: 'preenchimento_labial',
    subTitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    promotion: '1 Sessão',
    backgroundImage: background5,
    margin: '20px',
  },
];

function Treatments() {
  const [status, setStatus] = React.useState(test[0].title);
  const [mobile, setMobile] = React.useState<boolean>(window.innerWidth >= 1024 ? false : true);

  React.useEffect(() => {
    if (window.innerWidth <= 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [window.innerWidth]);

  return (
    <section className="min-h-[860px]" id="#treatmentSection">
      <div className="flex flex-col gap-2">
        <h2 className="xl:text-5xl text-4xl text-color-base-7">Nossas especialidades </h2>
        <h4 className="xl:text-2xl text-xl text-color-base-4">
          Confira nossos tratamentos mais solicitados e recomendados
        </h4>
      </div>
      <article className="xl:flex grid xl:mt-40 mt-20 xl:gap-x-8 xl:gap-y-0 gap-y-8 justify-center">
        {test.map((data) => (
          <IllustrativeCard
            key={data.slug}
            title={data.title}
            subTitle={data.subTitle}
            setValue={setStatus}
            value={status}
            backgroundImage={data.backgroundImage}
            margin={mobile ? '' : data.margin}
            promotion={data.promotion}
            slug={data.slug}
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
