import React from 'react'
import SectionTitle from '../SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from '../../assets/home/slide1.jpg'
import image2 from '../../assets/home/slide2.jpg'
import image3 from '../../assets/home/slide3.jpg'
import image4 from '../../assets/home/slide4.jpg'
import image5 from '../../assets/home/slide5.jpg'
import 'swiper/css';
export default function Order() {
    const slideImages = [
        {image:image1,label:"Salad"},
        {image:image2,label:"Pizza"},
        {image:image3,label:"Soup"},
        {image:image4,label:"Dessert"},
        {image:image5,label:"Salad"},
    ]
  return (
    <div>
        <SectionTitle title={"Order Online"} subtitle={"---From 11:00am to 10:00pm---"}/>
        <div className='w-3/4 mx-auto'>
        <Swiper
         modules={[Navigation,Pagination,Autoplay]}
         spaceBetween={20}
        pagination
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3, 
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
        {
            slideImages?.map((img,idx)=>(
                <SwiperSlide key={idx}>
                    <div className='relative pb-6'>
                        <img src={img.image} alt="img.label" />
                        <h1 className='text-white absolute bottom-8 z-10 text-center w-full'>{img.label}</h1>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
        </div>
    </div>
  )
}
