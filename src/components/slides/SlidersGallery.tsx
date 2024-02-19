import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

type PhotoProtocol = {
  _id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

type SlidersProtocol = {
  galleryPhotos: PhotoProtocol[];
  setSlide: React.Dispatch<React.SetStateAction<number>>;
};

function Sliders({ galleryPhotos, setSlide }: SlidersProtocol) {
  return (
    <div className="w-1/2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(value) => setSlide(value.activeIndex)}
        className="rounded-[20px] shadowCustom"
        autoplay={{ delay: 3000 }}
      >
        {galleryPhotos.map((photo) => (
          <SwiperSlide key={photo._id} className="">
            <Image src={photo.src} alt={photo.alt} className="h-[540px] w-full rounded-[20px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sliders;
