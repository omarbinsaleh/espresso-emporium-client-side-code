import React from 'react'
import { FaEye, FaTrash } from 'react-icons/fa'
import { MdEdit, MdEditSquare } from 'react-icons/md'

const CoffeeCard = ({img, name, chef, price}) => {
  return (
    <div className=' flex items-center justify-between p-8 py-12 sm:pr-12 bg-[#F5F4F1] bg-opacity-90 backdrop-blur-4xl rounded-md max-h-[200px] gap-4'>
      <div className='flex items-center justify-start'>
         <img className=' w-[100px] sm:w-[130px] aspect-[3/4]' src={img} alt="" />
      </div>
      <div className='flex-1'>
         <p>Name: <span className='text-slate-500 capitalize'>{name}</span></p>
         <p>Chef: <span className='text-slate-500 capitalize'>{chef}</span> </p>
         <p>Price: <span className='text-slate-500 capitalize'>{price}</span> </p>
      </div>
      <div className='flex flex-col items-center justify-center gap-1'>
         <button className='bg-[#D2B48C] btn text-center text-lg rounded-br-none rounded-bl-none'><FaEye></FaEye></button>
         <button className='btn bg-black text-white text-center text-lg rounded-none'> <MdEdit></MdEdit> </button>
         <button className='btn bg-red-500 text-white text-lg text-center rounded-tl-none rounded-tr-none'> <FaTrash></FaTrash> </button>
      </div>
    </div>
  )
}

export default CoffeeCard
