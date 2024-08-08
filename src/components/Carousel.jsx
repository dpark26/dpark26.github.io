import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from './Carousel.module.css';

export default function Carousel() {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            className={styles['swiper-container']}
        >
            <SwiperSlide className={styles['carousel-container']}>
                <img
                    className={styles['carousel-img']}
                    src="/personal-website/images/grad.jpg"
                    alt="Graduation"
                />
            </SwiperSlide>
            <SwiperSlide className={styles['carousel-container']}>
                <img
                    className={styles['carousel-img']}
                    src="/personal-website/images/research_team.JPG"
                    alt="Research Awards"
                />
            </SwiperSlide>
            <SwiperSlide className={styles['carousel-container']}>
                <img
                    className={styles['carousel-img']}
                    src="/personal-website/images/eng_team.jpg"
                    alt="Engineering Team"
                />
            </SwiperSlide>
            <SwiperSlide className={styles['carousel-container']}>
                <img
                    className={styles['carousel-img']}
                    src="/personal-website/images/cfg.JPG"
                    alt="Camp Flog Gnaw"
                />
            </SwiperSlide>
            <SwiperSlide className={styles['carousel-container']}>
                <img
                    className={styles['carousel-img']}
                    src="/personal-website/images/zoom.jpg"
                    alt="Zoom"
                />
            </SwiperSlide>
        </Swiper>
    );
}