import { StaticImageData } from 'next/image';
import DepilacaoBuco from '../assets/img/img-depilacao.png';
import PreenchimentoLabial from '../assets/img/img-labial.png';
import Botox from '../assets/img/img-botox.png';
import DepilacaoAbdomen from '../assets/img/img-depilacao-abdomen.jpg';
import DepilacaoAxila from '../assets/img/img-depilacao-axila.png';
import DepilacaoBraco from '../assets/img/img-depilacao-braco.png';
import DepilacaoCostas from '../assets/img/img-depilacao-costas.jpg';
import DepilacaoPernas from '../assets/img/img-depilacao_pernas.jpg';
import DepilacaoPerianal from '../assets/img/img-depilacao-perianal.png';
import DepilacaoVirilha from '../assets/img/img-depilacao-virilha.png';

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
  {
    name: 'Depilação Abdomen',
    slug: 'depilacao-abdomen',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 90.0,
    image: DepilacaoAbdomen,
  },
  {
    name: 'Depilação Axila',
    slug: 'depilacao-axila',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 60.0,
    image: DepilacaoAxila,
  },
  {
    name: 'Depilação Braço',
    slug: 'depilacao-braco',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 100.0,
    image: DepilacaoBraco,
  },
  {
    name: 'Depilação Costas',
    slug: 'depilacao-costas',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 150.0,
    image: DepilacaoCostas,
  },
  {
    name: 'Depilação Pernas',
    slug: 'depilacao-pernas',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 130.0,
    image: DepilacaoPernas,
  },
  {
    name: 'Depilação Perianal',
    slug: 'depilacao-perianal',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 130.0,
    image: DepilacaoPerianal,
  },
  {
    name: 'Depilação Virilha',
    slug: 'depilacao-virilha',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore modi eum corrupti totam culpa porro facere corporis, recusandae perspiciatis sunt, nesciunt natus accusantium quasi odit illo ea consectetur rem labore.',
    price: 160.0,
    image: DepilacaoVirilha,
  },
];
