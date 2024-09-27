import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import articles from './articles.json';
import 'swiper/css';
import 'swiper/css/navigation';
import './Styles.css';

const Slide = () => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
            640: {slidesPerView: 3,},
            768: {slidesPerView: 4,},
            }}
        >
            {articles.map(article => (
                <SwiperSlide key={article.id}>
                    <a href={article.link}>
                        <img src={article.image} alt={article.link} />
                        <h3>{article.title}</h3>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slide;