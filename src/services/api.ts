import { StaticImageData } from 'next/image';
import DepilacaoBuco from '../assets/img/img-depilacao.png';
import PreenchimentoLabial from '../assets/img/img-labial.png';
import Botox from '../assets/img/img-botox.png';

export type TreatmentJsonProtocol = {
  name: string;
  slug: string;
  content: string;
  price: number;
  image: StaticImageData;
};

export const TreatmentsJson: TreatmentJsonProtocol[] = [
  {
    name: 'Depilação Buço',
    slug: 'depilacao_buco',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 120.0,
    image: DepilacaoBuco,
  },
  {
    name: 'Preenchimento Labial',
    slug: 'preenchimento_labial',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 200.0,
    image: PreenchimentoLabial,
  },
  {
    name: 'Botox',
    slug: 'botox',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 250.0,
    image: Botox,
  },
];
