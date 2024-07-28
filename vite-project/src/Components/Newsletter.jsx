import React from 'react'

const Newsletter = () => {
  return (
<div class="my-24 w-full flex flex-col items-center md:px-15   ">
      <div class=" w-full rounded-2xl border shadow-x1 p-10 bg-gradient-to-r from-green-200 to-white">
        <div class="flex flex-col items-center space-y-4 ">
          <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
           SUBSCRIBE
          </h1>
          <p class="text-sm text-gray-500 text-center ">
            Hello, please enter your email address to subscribe our newsletters.
          </p>
          <input
            type="text"
            placeholder="Email"
            class="border-2 rounded-lg h-12 px-4"
          />
          <button
            class=" flex justify-center text-xl text-black font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-white hover:text-lime-400 duration-500 border-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
