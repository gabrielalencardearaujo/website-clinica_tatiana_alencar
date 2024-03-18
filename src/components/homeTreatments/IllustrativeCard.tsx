'use client';
import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import styles from './CardTreatment.module.css';
import { BackgroundCard } from './CardTreatment.style';
import { StaticImageData } from 'next/image';

type CardPropsProtocol = React.ComponentProps<'a'> & {
  title: string;
  subTitle: string;
  backgroundImage: StaticImageData;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  margin?: string;
  promotion: string;
  slug: string;
};

function IllustrativeCard({
  title,
  subTitle,
  backgroundImage,
  setValue,
  value,
  margin,
  promotion,
  slug,
}: CardPropsProtocol) {
  return (
    <BackgroundCard
      background={backgroundImage.src}
      margin={margin ? margin : '0px'}
      className="xl:w-auto max-w-[800px] sm:min-w-[10px] min-w-[360px] "
    >
      <Link
        href={`/treatments/${slug}`}
        className={`flex flex-col justify-end text-color-base-0 relative ${styles.transitionAnimation}
        ${value === title ? 'sm:w-[800px] h-[600px] w-auto' : 'xl:w-[220px] xl:h-[600px] h-[600px] sm:w-[800px]'}
        `}
        onMouseEnter={() => setValue(title)}
        id="treatment-2"
      >
        <div
          className={`bg-color-base-7 h-40 xl:flex grid xxl:justify-between xxl:gap-10 xlg:gap-8 gap-4 xl:px-2 py-4 px-6 xl:absolute bl:w-[800px] xxxl:w-[750px] xxl:w-[630px] xlg:w-[560px] xl:w-[500px] w-full z-10
          ${styles.boxShadowCustomCard} ${styles.transitionAnimation} ${value === title ? 'xxl:px-7 xl:px-3' : 'xl:px-2'}`}
        >
          <div className="xl:w-[160px] w-auto flex flex-col gap-2 xxl:-mt-4 sm:-mt-8 xm:-mt-16">
            <p className={`xxl:text-lg text-sm w-40 borderCustom ${styles.borderCustom}`}>
              {promotion}
            </p>
            <p className="xxl:text-2xl text-lg font-medium text-wrap xl:max-w-[100px]">{title}</p>
          </div>
          <div className="w-1/2 flex flex-col justify-between xxl:-mt-4">
            <p className="xl:text-md xxl:text-lg text-sm">{subTitle}</p>
            <Link href={`/treatments/${slug}`} className="font-semibold underline">
              Ver Disponibilidade.
            </Link>
          </div>
        </div>
      </Link>
    </BackgroundCard>
  );
}

export default IllustrativeCard;
