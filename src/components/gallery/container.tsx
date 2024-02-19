'use client';
import React from 'react';
import { SlideBackground } from './SectionSlide.style';
import EscadasPhoto from '../../assets/img/gallery/escadas.jpg';
import FaxadaClinica from '../../assets/img/gallery/faxada-clinica.jpg';
import Interior1 from '../../assets/img/gallery/interior1.jpg';
import Interior2 from '../../assets/img/gallery/interior2.jpg';
import Interior3 from '../../assets/img/gallery/interior3.jpg';
import Sliders from '../slides/SlidersGallery';

const galleryPhotos = [
  {
    _id: 1,
    src: EscadasPhoto,
    alt: 'Clinica escadas',
    title: 'Escadas',
    description:
      'Sed id leo augue. Proin auctor congue cursus. Nulla facilisi. Donec fermentum tincidunt dignissim. Maecenas scelerisque dignissim auctor. Etiam nec quam ut augue faucibus dignissim. Aliquam erat volutpat.',
  },
  {
    _id: 2,
    src: FaxadaClinica,
    alt: 'Clinica Faxada',
    title: 'Faxada',
    description:
      'Sed id leo augue. Proin auctor congue cursus. Nulla facilisi. Donec fermentum tincidunt dignissim. Maecenas scelerisque dignissim auctor. Etiam nec quam ut augue faucibus dignissim. Aliquam erat volutpat.',
  },
  {
    _id: 3,
    src: Interior1,
    alt: 'Clinica Recepcao 1',
    title: 'Recepção 1',
    description:
      'Sed id leo augue. Proin auctor congue cursus. Nulla facilisi. Donec fermentum tincidunt dignissim. Maecenas scelerisque dignissim auctor. Etiam nec quam ut augue faucibus dignissim. Aliquam erat volutpat.',
  },
  {
    _id: 4,
    src: Interior2,
    alt: 'Clinica Recepcao 2',
    title: 'Recepção 2',
    description:
      'Sed id leo augue. Proin auctor congue cursus. Nulla facilisi. Donec fermentum tincidunt dignissim. Maecenas scelerisque dignissim auctor. Etiam nec quam ut augue faucibus dignissim. Aliquam erat volutpat.',
  },
  {
    _id: 5,
    src: Interior3,
    alt: 'Clinica Recepcao 3',
    title: 'Recepção 3',
    description:
      'Sed id leo augue. Proin auctor congue cursus. Nulla facilisi. Donec fermentum tincidunt dignissim. Maecenas scelerisque dignissim auctor. Etiam nec quam ut augue faucibus dignissim. Aliquam erat volutpat.',
  },
];

function GalleryPhotos() {
  const [slide, setSlide] = React.useState(0);

  return (
    <section className="min-h-[860px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl text-color-base-7">Nossos ambientes.</h2>
        <h4 className="text-2xl text-color-base-4">
          Veja nossos ambientes e sinta-se a vontade na melhor clínica na região de São Paulo
        </h4>

        <div className="slide-description relative mt-16">
          <SlideBackground
            background={Interior3.src}
            className="w-full rounded-[20px] h-[620px] flex p-10"
          ></SlideBackground>
          <div
            className="flex w-[95%] gap-20 z-10 backdrop-opacity-15 absolute top-10 left-10"
            id="slides"
          >
            <Sliders galleryPhotos={galleryPhotos} setSlide={setSlide} />
            <div className="flex flex-col gap-y-12 justify-center" id="description">
              <h4 className="text-5xl text-color-base-7 animeEntry">
                {galleryPhotos[slide].title}
              </h4>
              <p className="animeEntry">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias facilis dolor
                hic! Possimus vitae veniam odit consequuntur tempore voluptatem libero consequatur,
                sint dolorem exercitationem aut corrupti nemo nam quod?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryPhotos;
