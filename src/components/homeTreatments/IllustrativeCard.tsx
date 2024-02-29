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
};

function IllustrativeCard({
  title,
  subTitle,
  backgroundImage,
  setValue,
  value,
  margin,
  promotion,
}: CardPropsProtocol) {
  return (
    <BackgroundCard background={backgroundImage.src} margin={margin ? margin : '0px'}>
      <Link
        href={'/treatments'}
        className={`flex flex-col justify-end text-color-base-0 relative ${styles.transitionAnimation}
        ${value === title ? 'w-[800px] h-[600px]' : 'w-[220px] h-[600px]'}
        `}
        onMouseEnter={() => setValue(title)}
        id="treatment-2"
      >
        <div
          className={`bg-color-base-7 h-32 flex justify-between py-4 absolute w-[800px] z-10
          ${styles.boxShadowCustomCard} ${styles.transitionAnimation} ${value === title ? 'px-7' : 'px-4'}`}
        >
          <div className="w-[200px] flex flex-col gap-2 -mt-4">
            <p className={`text-lg w-40 borderCustom ${styles.borderCustom}`}>{promotion}</p>
            <p className="text-2xl font-medium">{title}</p>
          </div>
          <div className="w-1/2 flex flex-col justify-between -mt-4">
            <p>{subTitle}</p>
            <Link href={'/treatments'} className="font-semibold underline">
              Ver Disponibilidade.
            </Link>
          </div>
        </div>
      </Link>
    </BackgroundCard>
  );
}

export default IllustrativeCard;
