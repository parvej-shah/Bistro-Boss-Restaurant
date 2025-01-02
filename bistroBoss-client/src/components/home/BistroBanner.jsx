import React from 'react'
import img from '../../assets/home/chef-service.jpg'
export default function BistroBanner() {
  return (
    <div className={`my-10 h-[500px] relative`} style={{backgroundImage:`url(${img})`,backgroundPosition:"center",backgroundSize:"cover"}}>
        <div className='absolute bg-white top-1/2 left-1/2 text-primaryText transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 md:w-2/3 md:h-2/3 md:p-10 p-6 flex flex-col items-center justify-center text-center'>
            <h1 className='text-4xl'>BISTRO BOSS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
    </div>
  )
}
