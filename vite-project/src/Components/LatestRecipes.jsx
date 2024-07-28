import React from "react";
import Rec1 from "../assets/Rec1.jpg";

const LatestRecipes = () => {
  return (
    <div className='my-24 max-w-screen-2xl mx-auto flex flex-col items-center md:px-20 bg-green-100'>
      <div className="">
        <h1 className="flex justify-center text-3xl md:text-4xl font-serif text-black font-extrabold mb-8">
          Latest Recipes
        </h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8  ">

          <div className="rounded-2xl w-[200px] overflow-hidden shadow-2xl bg-white hover:shadow-lg hover:shadow-green-800 ">
            <img
              src={Rec1}
              alt=""
              className="justify-center  w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            />

            <div className="py-3 px-2">
              <h1 className="font-semibold">Coconut Basmati Rice</h1>

              <h2 className=" py-2 underline text-green-600 cursor-pointer hover:text-green-300  font">
                View Recipe
              </h2>
            </div>
          </div>

          <div className="rounded-2xl w-[200px] overflow-hidden shadow-2xl bg-white hover:shadow-lg hover:shadow-green-800 ">
            <img
              src={Rec1}
              alt=""
              className="justify-center  w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            />

            <div className="py-3 px-2">
              <h1 className="font-semibold">Coconut Basmati Rice</h1>

              <h2 className=" py-2 underline text-green-600 cursor-pointer hover:text-green-300  font">
                View Recipe
              </h2>
            </div>
          </div>

          <div className="rounded-2xl w-[200px] overflow-hidden shadow-2xl bg-white hover:shadow-lg hover:shadow-green-800 ">
            <img
              src={Rec1}
              alt=""
              className="justify-center  w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            />

            <div className="py-3 px-2">
              <h1 className="font-semibold">Coconut Basmati Rice</h1>

              <h2 className=" py-2 underline text-green-600 cursor-pointer hover:text-green-300  font">
                View Recipe
              </h2>
            </div>
          </div>

          <div className="rounded-2xl w-[200px] overflow-hidden shadow-2xl bg-white hover:shadow-lg hover:shadow-green-800 ">
            <img
              src={Rec1}
              alt=""
              className="justify-center  w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            />

            <div className="py-3 px-2">
              <h1 className="font-semibold">Coconut Basmati Rice</h1>

              <h2 className=" py-2 underline text-green-600 cursor-pointer hover:text-green-300  font">
                View Recipe
              </h2>
            </div>
          </div>

          <div className="rounded-2xl w-[200px] overflow-hidden shadow-2xl bg-white hover:shadow-lg hover:shadow-green-800 ">
            <img
              src={Rec1}
              alt=""
              className="justify-center  w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            />

            <div className="py-3 px-2">
              <h1 className="font-semibold">Coconut Basmati Rice</h1>

              <h2 className=" py-2 underline text-green-600 cursor-pointer hover:text-green-300  font">
                View Recipe
              </h2>
            </div>
          </div>

          <div className="rounded-2xl w-[200px] overflow-hidden shadow-2xl bg-white hover:shadow-lg hover:shadow-green-800 ">
            <img
              src={Rec1}
              alt=""
              className="justify-center  w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            />

            <div className="py-3 px-2">
              <h1 className="font-semibold">Coconut Basmati Rice</h1>

              <h2 className=" py-2 underline text-green-600 cursor-pointer hover:text-green-300  font">
                View Recipe
              </h2>
            </div>
          </div>

          <div className="rounded-2xl w-[200px] overflow-hidden shadow-2xl bg-white hover:shadow-lg hover:shadow-green-800 ">
            <img
              src={Rec1}
              alt=""
              className="justify-center  w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            />

            <div className="py-3 px-2">
              <h1 className="font-semibold">Coconut Basmati Rice</h1>

              <h2 className=" py-2 underline text-green-600 cursor-pointer hover:text-green-300  font">
                View Recipe
              </h2>
            </div>
          </div>

          <div className="rounded-2xl w-[200px] overflow-hidden shadow-2xl bg-white hover:shadow-lg hover:shadow-green-800 ">
            <img
              src={Rec1}
              alt=""
              className="justify-center  w-full transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            />

            <div className="py-3 px-2">
              <h1 className="font-semibold">Coconut Basmati Rice</h1>

              <h2 className=" py-2 underline text-green-600 cursor-pointer hover:text-green-300  font">
                View Recipe
              </h2>
            </div>
          </div>


        </div>

        <button className="py-3 px-20">View All Recipes</button>
      </div>
    </div>
  );
};

export default LatestRecipes;
