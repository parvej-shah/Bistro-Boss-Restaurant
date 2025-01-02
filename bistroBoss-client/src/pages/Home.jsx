import React from 'react'
import Banner from '../components/home/Banner'
import SectionTitle from '../components/SectionTitle'
import Order from '../components/home/Order'
import BistroBanner from '../components/home/BistroBanner'

export default function Home() {
  return (
    <div>
        <Banner/>
        <Order/>
        <BistroBanner/>
    </div>
  )
}
