import React from 'react'

const Hero = () => {
   return (
      <div className='bg-hero h-[500px] bg-cover bg-center font-rancho text-white w-full '>
         <div className='sm:grid grid-cols-2 w-full h-full p-4 max-w-6xl mx-auto'>
            <div className='hidden sm:block'></div>
            <div className='h-full flex flex-col justify-center gap-2'>
               <h1 className='text-4xl'>Would you like a Cup of Delicious Coffee?</h1>
               <p className='font-thin text-slate-300 text-lg'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
               <button className="btn h-5 py-2 border-0 text-lg max-w-[100px] bg-primary text-black inline hover:bg-transparent hover:text-white hover:border border-white rounded-sm">Learn More</button>
            </div>
         </div>
      </div>
   )
}

export default Hero
