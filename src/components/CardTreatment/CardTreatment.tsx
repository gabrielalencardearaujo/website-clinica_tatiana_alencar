'use client';
import React from 'react';
import { BoxShadow } from '@/assets/styles/BoxShadow';
import { BackgroundCard } from '../homeTreatments/CardTreatment.style';
import Link from 'next/link';
import { TreatmentJsonProtocol } from '@/services/api';

type CardTreatmentProtocol = React.PropsWithChildren & { props: TreatmentJsonProtocol };

function CardTreatment({ props }: CardTreatmentProtocol) {
  return (
    <BoxShadow className="flex w-[820px] h-[450px] justify-self-center">
      <div className="flex-1 relative">
        <BackgroundCard
          background={props.image.src}
          borderRadius="0px"
          boxShadow="0px"
          Position="40% 5000%"
        />
        <span
          className="absolute top-10 right-0 rounded-l-lg bg-color-white py-2 px-3.5"
          id="price"
        >
          <sup>R$</sup> {String(props.price.toFixed(2)).replace('.', ',')}
        </span>
      </div>
      <div className="flex-1 flex flex-col gap-4 p-8 justify-between">
        <h3 className="text-4xl">{props.name}</h3>
        <p className="text-sm">{props.content}</p>

        <div className="flex gap-4">
          <Link
            href={`/treatments/${props.slug}`}
            target="_blank"
            className="flex-1 flex content-center gap-4 justify-center border-2 border-color-base-8 py-3 px-6  text-color-base-8 rounded-[10px] text-sm font-bold"
          >
            <p className="self-center">Veja Mais</p>
          </Link>
          <Link
            href={'/appointments'}
            className="flex content-center gap-2 justify-center bg-color-base-8 py-4 px-6 text-color-base-0 rounded-[10px] text-sm font-semibold"
          >
            <p className="self-center">Adicionar ao Carrinho</p>
          </Link>
        </div>
      </div>
    </BoxShadow>
  );
}

export default CardTreatment;
