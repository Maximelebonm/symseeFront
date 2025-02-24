import './homeSlider.css';
import { Swiper, SwiperSlide,useSwiper  } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';

import rivier1 from '../../assets/photo/terrain/riviere1.jpg';
import rivier2 from '../../assets/photo/terrain/riviere2.jpg';
import rivier3 from '../../assets/photo/terrain/riviere3.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HomeSlider = () => {
    const swiper = useSwiper();
    return (
        <div id="homSliderContainer">
            <Swiper
                modules={[Navigation, Pagination,Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                coverflowEffect={{
                    slideShadows : true
                }}
                speed={2000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,

                }}
                loop={true}
                // navigation
                // pagination={{ clickable: true }}
                centeredSlides={true}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                className="Swiper"
            >
                <SwiperSlide>
                    <img src={rivier1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={rivier2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={rivier3}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )

}