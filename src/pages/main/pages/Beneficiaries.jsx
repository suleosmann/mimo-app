import React from 'react'
import { FaBell } from "react-icons/fa";
import ProfileImg from "../../../assets/ladydoll.jpeg";

const Beneficiaries = () => {
  return (
    <div className='mx-8 '>
      <div className="flex justify-between mt-16  text-custom-dark-green">
        <div className="mt-4 ">
          <h1 className="text-xl font-semibold">Beneficiaries</h1>
        </div>
        <div className="flex space-x-2">
          <FaBell className="w-6 h-5 mt-4" />
          <img
            src={ProfileImg}
            alt="Profile image"
            className="w-[52px] h-[52px] rounded-full"
          />
        </div>
      </div>
      <div className='flex flex-col w-[320px] h-[416px] space-y-3 mt-12'>
        <div className='flex flex-col bg-white p-2 rounded-lg'>
          <h1>Tim Mwaniki</h1>
          <h1>0700123456</h1>
        </div>
        <div className='flex flex-col bg-white p-2 rounded-lg'>
          <h1>Duncan Osoro</h1>
          <h1>011987654</h1>
        </div>
        <div className='flex flex-col bg-white p-2 rounded-lg'>
          <h1>Elizabeth Ojiambo</h1>
          <h1>0712456789</h1>
        </div>
        <div className='flex flex-col bg-white p-2 rounded-lg'>
          <h1>Fulgence Ondoro</h1>
          <h1>0700123456</h1>
        </div>
        <div className='flex flex-col bg-white p-2 rounded-lg'>
          <h1>Regina Kirima</h1>
          <h1>0712456789</h1>
        </div>
        <div className='flex flex-col bg-white p-2 rounded-lg'>
          <h1>Patrick Mahomes</h1>
          <h1>0700123456</h1>
        </div>
      </div>
      <div>
        <button className='bg-custom-green text-custom-dark-green font-bold w-[320px] h-[44px] rounded-lg absolute bottom-28'>ADD BENEFICIARY</button>
      </div>
    </div>
  )
}

export default Beneficiaries
