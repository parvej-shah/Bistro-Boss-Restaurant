import React from 'react'

export default function SectionTitle({title,subtitle}) {
  return (
    <div className='flex gap-2 flex-col justify-center items-center text-center my-10'>
        <p className='text-secondaryText text-xl italic'>{subtitle}</p>
        <h2 className='px-8 py-1 border-y-2 uppercase text-primaryText text-4xl'>{title}</h2>
    </div>
  )
}
