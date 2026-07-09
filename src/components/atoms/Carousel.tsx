"use client";

import { Button } from "./Button";
import { Icon } from "./Icon";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { useState } from "react";
import type { ReactNode } from "react";

type CarouselBreakpoints = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
};

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey?: (item: T, index: number) => string | number;
  className?: string;
  slideClassName?: string;
  navigationClassName?: string;
  gap?: number;
  breakpoints?: CarouselBreakpoints;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  autoplaySpeed?: number;
  pauseAutoplayOnHover?: boolean;
  pagination?: boolean;
  paginationClickable?: boolean;
  previousLabel?: string;
  nextLabel?: string;
};

export function Carousel<T>({
  items,
  renderItem,
  getKey,
  className = "",
  slideClassName = "",
  navigationClassName = "",
  gap = 22,
  breakpoints = { mobile: 1, tablet: 3, desktop: 4 },
  loop = false,
  autoplay = false,
  autoplayDelay = 2400,
  autoplaySpeed = 900,
  pauseAutoplayOnHover = true,
  pagination = false,
  paginationClickable = true,
  previousLabel = "Previous slide",
  nextLabel = "Next slide",
}: CarouselProps<T>) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const mobileSlides = breakpoints.mobile ?? 1;
  const tabletSlides = breakpoints.tablet ?? 3;
  const desktopSlides = breakpoints.desktop ?? 4;
  const modules = [
    ...(autoplay ? [Autoplay] : []),
    ...(pagination ? [Pagination] : []),
  ];

  return (
    <div className={`hp-carousel ${className}`}>
      <Swiper
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: pauseAutoplayOnHover,
              }
            : false
        }
        breakpoints={{
          0: { slidesPerView: mobileSlides },
          768: { slidesPerView: tabletSlides },
          1100: { slidesPerView: desktopSlides },
        }}
        loop={loop}
        modules={modules}
        onSwiper={setSwiper}
        pagination={
          pagination
            ? {
                clickable: paginationClickable,
              }
            : false
        }
        spaceBetween={gap}
        speed={autoplay ? autoplaySpeed : 300}
      >
        {items.map((item, index) => (
          <SwiperSlide
            className={slideClassName}
            key={getKey ? getKey(item, index) : index}
          >
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`hp-scroll-buttons ${navigationClassName}`}>
        <Button
          onClick={() => swiper?.slidePrev(300)}
          variant="unstyled"
          aria-label={previousLabel}
        >
          <Icon name="chevron_left" />
        </Button>
        <Button
          onClick={() => swiper?.slideNext(300)}
          variant="unstyled"
          aria-label={nextLabel}
        >
          <Icon name="chevron_right" />
        </Button>
      </div>
    </div>
  );
}
