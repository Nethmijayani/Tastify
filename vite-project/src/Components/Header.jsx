import React from 'react'

const Header = () => {
  return (
    <>
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/HImg3.jpg')] bg-cover bg-no-repeat " id='header'>
        <div className='w-full lg:w-2/3 space-y-5'>
            <div className=' font-semibold text-6xl'>

            {/*text content section */}    
            <div className='space-y-2 text-center sm:text-left p-4'>
            <h1 className='font-extrabold font-sans text-8xl bg-gradient-to-r from-green-400 to-primary bg-clip-text text-transparent'>Discover, Create, and Enjoy </h1>
            <br />
            <h2 className='font-semibold font-sans text-white text-3xl text-transparent bg-clip-text'>Explore our collection of delicious recipes, cooking tips, and culinary inspiration.</h2>
            </div>
            </div>
        <button className='bg-green-800 text-2xl text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-white hover:text-lime-400 duration-500'>
          View Recipes
        </button>
        </div>
      
    </div>
    </>
  )
}

export default Header
