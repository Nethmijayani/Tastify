import React from 'react'

const Newsletter = () => {
  return (
<div className="my-24 w-full flex flex-col items-center md:px-15   ">
      <div className=" w-full rounded-2xl border shadow-x1 p-10 bg-gradient-to-r from-green-200 to-white">
        <div className="flex flex-col items-center space-y-4 ">
          <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
           SUBSCRIBE
          </h1>
          <p className="text-m text-gray-500 text-center ">
             Enter your email to subscribe our newsletters.
          </p>
          <input
            type="text"
            placeholder="Email"
            className=" border-2 rounded-lg h-10 w-35 px-4"
          />
          <button
            className=" flex justify-center bg-green-800 text-xl text-black font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-white hover:text-lime-400 duration-500 border-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
