import React from 'react'
import Breakfast2 from "../assets/Breakfast2.jfif"

const LatestRecipes = () => {
  return (
    <div className='my-24 max-w-screen-2xl mx-auto"'>
      <div className='bg-green-100'>
        <h1 className='px-20 py-10 font-extrabold font-serif text-4xl'>Latest Recipes</h1>
      
    <div className='px-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-4  '>

      <div className='rounded-2xl w-[200px] overflow-hidden shadow-xl bg-white '>
        <img src={Breakfast2} alt="" className='justify-center  w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer' />

        <div className='py-2 px-2'>
            <h1 className='font-semibold'>Japaneese Pancake</h1>

            <p className='py-2'>To apply a gradient to text, you'll use the bg-clip-text and text-transparent utilities </p>

            <h2 className='underline text-green-600 cursor-pointer hover:text-green-300 '>View Recipe</h2>
        </div>
      </div>

      <div className='rounded-2xl w-[200px] overflow-hidden shadow-xl bg-white '>
        <img src={Breakfast2} alt="" className='justify-center w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer' />

        <div className='py-2 px-2'>
            <h1 className='font-semibold'>Japaneese Pancake</h1>

            <p className='py-2'>To apply a gradient to text, you'll use the bg-clip-text and text-transparent utilities </p>

            <h2 className='underline text-green-600 cursor-pointer hover:text-green-300 '>View Recipe</h2>
        </div>
      </div>
      <div className='rounded-2xl w-[200px] overflow-hidden shadow-xl bg-white '>
        <img src={Breakfast2} alt="" className='justify-center w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer' />

        <div className='py-2 px-2'>
            <h1 className='font-semibold'>Japaneese Pancake</h1>

            <p className='py-2'>To apply a gradient to text, you'll use the bg-clip-text and text-transparent utilities </p>

            <h2 className='underline text-green-600 cursor-pointer hover:text-green-300 '>View Recipe</h2>
        </div>
      </div>

      <div className='rounded-2xl w-[200px] overflow-hidden shadow-xl bg-white '>
        <img src={Breakfast2} alt="" className='justify-center w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer' />

        <div className='py-2 px-2'>
            <h1 className='font-semibold'>Japaneese Pancake</h1>

            <p className='py-2'>To apply a gradient to text, you'll use the bg-clip-text and text-transparent utilities </p>

            <h2 className='underline text-green-600 cursor-pointer hover:text-green-300 '>View Recipe</h2>
        </div>
      </div>

      <div className='rounded-2xl w-[200px] overflow-hidden shadow-xl bg-white '>
        <img src={Breakfast2} alt="" className='justify-center w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer' />

        <div className='py-2 px-2'>
            <h1 className='font-semibold'>Japaneese Pancake</h1>

            <p className='py-2'>To apply a gradient to text, you'll use the bg-clip-text and text-transparent utilities </p>

            <h2 className='underline text-green-600 cursor-pointer hover:text-green-300 '>View Recipe</h2>
        </div>
      </div>
      </div>
        <br />
      <button className='py-3 px-20'>View All Recipes</button>
    </div>
    </div>
  )
}

export default LatestRecipes
