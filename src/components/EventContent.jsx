import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import EventCard from './EventCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import eventsDetails from '../content/events';
import workshopDetails from '../content/workshops';

const EventContent = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <div className='h-fit flex items-center p-4 md:p-6 lg:p-10'>
            <div className="text-white font-primary p-4 md:p-6 lg:p-10 border-4 md:border-6 lg:border-8 border-solid border-[#B81033] rounded-lg w-full">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8 lg:mb-10 gap-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl">Events</h1>
                    <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="cursor-pointer text-2xl md:text-3xl lg:text-4xl hover:text-[#B81033] transition-colors"
                            onClick={() => swiperInstance?.slidePrev()}
                        />
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="cursor-pointer text-2xl md:text-3xl lg:text-4xl hover:text-[#B81033] transition-colors"
                            onClick={() => swiperInstance?.slideNext()}
                        />
                    </div>
                </div>

                <Swiper
                    effect={'coverflow'}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    className="py-4"
                    centeredSlides={true}
                    loop={true} 
                >
                    {workshopDetails.map((e, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <EventCard imglink={e.posters[0]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default EventContent;