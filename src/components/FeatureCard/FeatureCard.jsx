import React from 'react'

function FeatureCard({img, title, description}) {
  return (
    <div className='space-y-2 p-3 text-center sm:text-left max-w-sm'>
      <img className='w-16 aspect-square mx-auto sm:mx-0' src={img} alt="" />
      <h2 className="text-3xl">{title}</h2>
      <p className=' font-thin leading-5'>{description}</p>
    </div>
  )
}

export default FeatureCard
