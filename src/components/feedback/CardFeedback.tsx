import Image from 'next/image';
import React from 'react';
import QuoteLeft from '../../assets/svgs/quote-left.svg';
import QuoteRight from '../../assets/svgs/quote-right.svg';
import { CardFeedbackProtocol } from '../slides/SlidersFeedbacks';

type CardProtocol = { feedbackClients: CardFeedbackProtocol };

function CardFeedback({ feedbackClients }: CardProtocol) {
  return (
    <div className="rounded-[20px] shadowCustom bg-color-base-0 w-96 h-56 p-4">
      <div className="flex gap-2.5 mb-6" id="person">
        <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
          <Image src={feedbackClients.image} alt="Foto Cliente" className="h-full" />
        </div>
        <span>
          <p className="text-lg font-medium">{feedbackClients.name}</p>
          <p className="text-xs opacity-50">{feedbackClients.date}</p>
        </span>
      </div>
      <div id="comment">
        <div className="flex flex-col" id="div-comment">
          <span>
            <Image src={QuoteLeft} alt="aspas esquerda comentario" />
          </span>
          <p className="text-sm text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus fugit explicabo
            debitis deleniti numquam, nulla delectus voluptatum doloremque beatae.
          </p>
          <span className="self-end">
            <Image src={QuoteRight} alt="aspas direita comentario" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardFeedback;
