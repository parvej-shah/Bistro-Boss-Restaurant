import React from 'react'
import img from '../../assets/home/chef-service.jpg'
export default function BistroBanner() {
  return (
    <div className={`my-10 h-[500px] relative`} style={{backgroundImage:`url(${img})`,backgroundPosition:"center",backgroundSize:"cover"}}>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className=''>BISTRO BOSS</h1>
        </div>
    </div>
  )
}
