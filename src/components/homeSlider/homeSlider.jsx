import './homeSlider.css';
import { Swiper, SwiperSlide,useSwiper  } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HomeSlider = () => {
    const swiper = useSwiper();
    return (
        <div id="homSliderContainer">
            {/* <h1>
                les images du jours au symsee
            </h1> */}
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                coverflowEffect={{
                    slideShadows : true
                }}
                navigation
                pagination={{ clickable: true }}
                centeredSlides={true}
                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                className="Swiper"
            >
            <SwiperSlide>
                <img src="https://picsum.photos/id/15/600/300"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://picsum.photos/id/10/600/300"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://picsum.photos/id/12/400/200"/>
            </SwiperSlide>
            </Swiper>
        </div>
    )

}