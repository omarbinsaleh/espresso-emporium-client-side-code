import React from 'react'
import logo from '../assets/images/more/logo1.png'

const Header = () => {
  return (
    <div className='h-14 bg-header bg-cover bg-center font-rancho text-center flex gap-4 items-center justify-center bg-white/80'>
      <img className='w-10' src={logo} alt="" />
      <h1 className="text-4xl  text-white">Espresso Emporium</h1>
    </div>
  )
}

export default Header
