import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {

  const Coffeess = useLoaderData()
  console.log(Coffeess)

  return (
    <div className='m-20'>
      <h3 className='text-6xl text-purple-600 text-center my-20'>Hot Hot Coffee : {Coffeess.length}</h3>
      
      <div className='grid md:grid-cols-2 gap-4'>
        {
          Coffeess.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
