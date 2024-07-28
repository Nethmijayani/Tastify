import React from "react";
import Breakfast from "../assets/fast-food.png";
import Lunch from "../assets/food.png";
import Drinks from "../assets/poinsettia.png";
import Desserts from "../assets/sweets.png";

const RecipeCategories = () => {
  return (
    <div className="flex flex-col items-center pt-20   py-12 md:px-20">
      <h1 className="text-3xl md:text-4xl font-serif text-black font-extrabold mb-8">
        Browse Recipes
      </h1>

      <div className="w-full lg:w-3/4 py-6 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="bg-green-200 rounded-full shadow-xl p-8 flex justify-center items-center hover:bg-green-300 transition-all duration-300 cursor-pointer">
            <div className="text-center">
              <img
                src={Breakfast}
                alt="Breakfast"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h5 className="text-xl md:text-xl font-semibold text-black">
                Breakfast
              </h5>
            </div>
          </div>

          <div className="bg-green-200 rounded-full shadow-xl p-8 flex justify-center items-center hover:bg-green-300 transition-all duration-300 cursor-pointer">
            <div className="text-center">
              <img src={Lunch} alt="Lunch" className="w-20 h-20 mx-auto mb-4" />
              <h5 className="text-xl md:text-xl font-semibold text-black">
                Lunch
              </h5>
            </div>
          </div>

          <div className="bg-green-200 rounded-full shadow-xl p-8 flex justify-center items-center hover:bg-green-300 transition-all duration-300 cursor-pointer">
            <div className="text-center">
              <img
                src={Drinks}
                alt="Drinks"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h5 className="text-xl md:text-xl font-semibold text-black">
                Drinks
              </h5>
            </div>
          </div>

          <div className="bg-green-200 rounded-full shadow-xl p-8 flex justify-center items-center hover:bg-green-300 transition-all duration-300 cursor-pointer">
            <div className="text-center">
              <img
                src={Desserts}
                alt="Desserts"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h5 className="text-xl md:text-xl font-semibold text-black">
                Desserts
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCategories;
