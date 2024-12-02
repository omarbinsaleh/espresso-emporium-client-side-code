import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';
import Hero from '../components/Hero/Hero';
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
import FeatureCard from '../components/FeatureCard/FeatureCard';
import Title from '../components/Title';
import CoffeeCard from '../components/CoffeeCard/CoffeeCard';

const Home = () => {
  const { loading } = useContext(AuthContext);
  const loadedCoffees = useLoaderData();
  console.log(loadedCoffees);
  const [coffees, setCoffees] = useState(loadedCoffees);

  console.log(loading);

  return (

    <div className=''>
      <section className=''>
        <Hero></Hero>
      </section>
      <section className=' p-4 bg-[#ECEAE3] py-10'>
        <div className='max-w-6xl mx-auto sm:flex space-y-4 sm:space-y-0 items-center justify-between gap-5 font-rancho'>
          <FeatureCard img={icon1} title={'Awesome Aroma'} description={'You will definitely be a fan of the design & aroma of your coffee'}></FeatureCard>
          <FeatureCard img={icon2} title={'High Quality'} description={'We served the coffee to you maintaining the best quality'}></FeatureCard>
          <FeatureCard img={icon3} title={'Pure Grades'} description={'The coffee is made of the green coffee beans which you will love'}></FeatureCard>
          <FeatureCard img={icon4} title={'Proper Roasting'} description={'Your coffee is brewed by first roasting the green coffee beans'}></FeatureCard>
        </div>
      </section>
      <section className=' p-4 py-10 bg-popular-coffee bg-cover bg-center min-h-[900px] my-10'>
        <div className='max-w-6xl mx-auto'>
          <header className='text-center space-y-1'>
            <p className='text-slate-500'>---Sip & Savor---</p>
            <Title title={'Our Popular Products'}></Title>
            <Link to={'/add-coffee'}>
              <button className='btn text-lg font-thin font-rancho bg-primary text-white rounded-[4px] min-h-0 h-9 px-8 border hover:border-black hover:bg-primary/80   mt-3'>Add Coffee</button>
            </Link>
          </header>
          <div className='grid lg:grid-cols-2 5xl:grid-cols-3  gap-4 mt-10'>
            {
              coffees?.map(coffee => <CoffeeCard key={coffee._id} img={coffee.photoURL} name={coffee.name} chef={coffee.chef} price={coffee.price} ></CoffeeCard>)
            }
          </div>

        </div>
      </section>
    </div>

  )
}

export default Home
