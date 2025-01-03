import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../../assets/home/01.jpg'
import banner2 from '../../assets/home/02.jpg'
import banner3 from '../../assets/home/03.png'
import banner4 from '../../assets/home/04.jpg'
import banner5 from '../../assets/home/05.png'
import banner6 from '../../assets/home/06.png'
export default function Banner() {
  return (
    <div className="h-[300px] md:h-[550px] mb-20">
        <Carousel className="h-full"  showArrows={true} infiniteLoop={true} autoPlay={true} showThumbs={true}>
        <div className="h-[300px] md:h-[550px]">
          <img src={banner1} className="h-full object-fill" alt="Banner 1" />
        </div>
        <div className="h-[300px] md:h-[550px]">
          <img src={banner2} className="h-full object-fill" alt="Banner 2" />
        </div>
        <div className="h-[300px] md:h-[550px]">
          <img src={banner3} className="h-full object-fill" alt="Banner 3" />
        </div>
        <div className="h-[300px] md:h-[550px]">
          <img src={banner4} className="h-full object-fill" alt="Banner 4" />
        </div>
        <div className="h-[300px] md:h-[550px]">
          <img src={banner5} className="h-full object-fill" alt="Banner 5" />
        </div>
        <div className="h-[300px] md:h-[550px]">
          <img src={banner6} className="h-full object-fill" alt="Banner 6" />
        </div>
            </Carousel>
    </div>
  )
}
