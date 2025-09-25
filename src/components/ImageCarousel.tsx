import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface ImageCarouselProps {
  images: string[];
  className?: string;
  autoplay?: boolean;
  effect?: 'slide' | 'fade';
}

const ImageCarousel = ({ 
  images, 
  className = "", 
  autoplay = true, 
  effect = 'fade' 
}: ImageCarouselProps) => {
  const swiperRef = useRef(null);

  const swiperModules = [Pagination];
  if (autoplay) swiperModules.push(Autoplay);
  if (effect === 'fade') swiperModules.push(EffectFade);

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <Swiper
        ref={swiperRef}
        modules={swiperModules}
        effect={effect}
        autoplay={autoplay ? {
          delay: 4000,
          disableOnInteraction: false,
        } : false}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet opacity-50 bg-white',
          bulletActiveClass: 'swiper-pagination-bullet-active opacity-100 bg-accent'
        }}
        loop={true}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;