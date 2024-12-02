import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
         <Header></Header>
      </header>
      <main className='flex-1'>
         <Outlet></Outlet>
      </main>
      <footer>
         <h1>This is Footer Section</h1>
      </footer>
    </div>
  )
}

export default MainLayout
