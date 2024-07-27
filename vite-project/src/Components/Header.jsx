import React from 'react'
import Img_2 from "../assets/Img_2.jfif"


const Header = () => {
  return (
    <>
    <div className='relative z-[-1]'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 items-center min-h-[600px]'>

            {/*text content section */}    
            <div className='space-y-3 text-center sm:text-left p-4'>
            <h1 className='font-extrabold font-sans text-6xl'>Discover, Create, and Enjoy </h1>
            <br />
            <h2 className='font-semibold font-sans text-2xl'>Explore our collection of delicious recipes, cooking tips, and culinary inspiration.</h2>
            </div>

            {/*Image section */} 
            <div>
                <img src={Img_2} alt="" />
            </div>
            </div>
        
        </div>
      
    </div>
    </>
  )
}

export default Header
