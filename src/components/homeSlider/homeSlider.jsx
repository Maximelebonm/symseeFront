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
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

  
        modules={[Autoplay, Pagination, Navigation]}
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