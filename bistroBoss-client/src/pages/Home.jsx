import React from 'react'
import Banner from '../components/home/Banner'
import SectionTitle from '../components/SectionTitle'
import Order from '../components/home/Order'
import BistroBanner from '../components/home/BistroBanner'
import img from '../assets/home/chef-service.jpg'
import MenuList from '../components/home/MenuList'
import FoodCart from '../components/home/FoodCart'
export default function Home() {
  return (
    <div>
        <Banner/>
        <Order/>
        <BistroBanner bgImg={img} title={"Bistro Boss"} subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."} isBlack={false}/>
        <SectionTitle title={"FROM OUR MENU"} subtitle={"---Check it out---"}/>
        <MenuList menu={"popular"}/>
        <div className='flex items-center justify-center text-center container mx-auto h-64 bg-black'>
          <h1 className= 'text-3xl md:text-5xl font-bold text-white'>Call Us: +88 0192345678910</h1>
        </div>
        <SectionTitle title={"CHEF RECOMENDS"} subtitle={"---Should Try---"}/>
        <FoodCart category='offered'/>
    </div>
  )
}
