import React from 'react'
export default function BistroBanner({bgImg,title,subTitle,isBlack}) {
  return (
    <div className={`my-10 h-[500px] relative bg-fixed`} style={{backgroundImage:`url(${bgImg})`,backgroundPosition:"center",backgroundSize:"100% 100%"}}>
        <div className={`absolute ${isBlack?"bg-primaryText/60 text-white":"bg-white text-primaryText"} bg-white top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 md:w-2/3 md:h-2/3 md:p-12 p-6 flex flex-col items-center justify-center text-center`}>
            <h1 className='text-4xl uppercase'>{title}</h1>
            <p>{subTitle}</p>
        </div>
    </div>
  )
}
