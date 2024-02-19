import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import CardFeedback from '../feedback/CardFeedback';
import { StaticImageData } from 'next/image';

export type CardFeedbackProtocol = {
  _id: number;
  name: string;
  comment: string;
  date: string;
  image: StaticImageData;
};

type FeedbacksProtocol = {
  feedbacks: CardFeedbackProtocol[];
};

function SlidersFeedbacks({ feedbacks }: FeedbacksProtocol) {
  return (
    <div className="w-full justify-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={-200}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className={`rounded-[20px] h-[300px] overflow-auto `}
      >
        {feedbacks.map((feed) => (
          <SwiperSlide key={feed._id} className="mt-10 ms-20">
            <CardFeedback feedbackClients={feed} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlidersFeedbacks;
