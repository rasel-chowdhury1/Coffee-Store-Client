import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {

  const LoadedCoffeess = useLoaderData()
  const [coffeess, setCoffeess] = useState(LoadedCoffeess)
  console.log(coffeess)

  return (
    <div className='m-20'>
      <h3 className='text-6xl text-purple-600 text-center my-20'>Hot Hot Coffee : {coffeess.length}</h3>
      
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffeess.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffeess={coffeess}
          setCoffeess={setCoffeess}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
