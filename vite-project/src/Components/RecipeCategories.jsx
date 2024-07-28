import React from 'react'
import Breakfast from "../assets/fast-food.png"
import Lunch from "../assets/food.png"
import Drinks from "../assets/poinsettia.png"
import Desserts from "../assets/sweets.png"

const RecipeCategories = () => {
  return (
    <div className='items-center px-20'>
      <h1 className='text-4xl font-serif text-black font-extrabold px-20'>Browse Recipes</h1>

    <br/>

      <div className="w-full lg-w-3/4 px-4">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-green-200 rounded-full shadow-3xl p-8 items-center flex justify-center hover:bg-green-300 transition-all duration-300 cursor-pointer">
            
              <div>
                <img src={Breakfast} alt="" className='w-30 h-20  px-8' />
                <h5 className="text-3xl font-semibolt text-black px-5 text-center sm:text-xl">
                  Breakfast
                </h5>
              </div>
            
          </div>


          <div className="bg-green-200 rounded-full shadow-3xl p-8 items-center flex justify-center hover:bg-green-300 transition-all duration-300 cursor-pointer">
            
            <div>
              <img src={Lunch} alt="" className='w-30 h-20  px-8' />
              <h5 className="text-3xl font-semibolt text-black px-5 text-center md:text-xl">
                Lunch
              </h5>
            </div>
          
        </div>

        <div className="bg-green-200 rounded-full shadow-3xl p-8 items-center flex justify-center hover:bg-green-300 transition-all duration-300 cursor-pointer">
            
              <div>
                <img src={Drinks} alt="" className='w-30 h-20  px-8' />
                <h5 className="text-3xl font-semibolt text-black px-5 text-center md:text-xl ">
                  Drinks
                </h5>
              </div>
            
          </div>

          <div className="bg-green-200 rounded-full shadow-3xl p-8 items-center flex justify-center hover:bg-green-300 transition-all duration-300 cursor-pointer">
            
              <div>
                <img src={Desserts} alt="" className='w-30 h-20  px-8' />
                <h5 className="text-3xl font-semibolt text-black px-5 text-center md:text-xl">
                  Desserts
                </h5>
              </div>
            
          </div>
          

          </div> 
        </div>

      </div>
    
  )
}

export default RecipeCategories
