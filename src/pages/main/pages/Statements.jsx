import React from 'react'
import { FaBell } from "react-icons/fa";
import ProfileImg from "../../../assets/ladydoll.jpeg";

const Statements = () => {
  

  return (
    <div className='mx-8 '>
      {/* <div className="flex justify-between mt-16  text-custom-dark-green">
        <div className="mt-4 ">
          <h1 className="text-xl font-semibold">Transcations</h1>
        </div>
        <div className="flex space-x-2">
          <FaBell className="w-6 h-5 mt-4" />
          <img
            src={ProfileImg}
            alt="Profile image"
            className="w-[52px] h-[52px] rounded-full"
          />
        </div>
      </div> */}
      <div className="flex justify-between  text-black">
        <div className="mt-4 ">
          <h1 className="text-xl font-normal">30 Nov 2023</h1>
        </div>
        <div className="flex flex-col space-y-0.5 mt-4 mr-4 justify-center">
          <span className='border-b-4 w-7 border-gray-700'></span>
          <span className='border-b-4 w-5 border-gray-700 ml-1'></span>
          <span className='border-b-4 w-3 border-gray-700 ml-2'></span>
        </div>
      </div>
      <div className='mt-4 ' >
        <table className='w-full text-sm ' >
          <thead className='border-b-2 border-gray-300'>
            <tr >
              <th className='pr-12'>Date MMHH</th>
              <th >Amount</th>
              <th className='pl-16'>Description</th>
            </tr>
          </thead>
          <tbody >
          <tr >
              <td className='pl-2 pr-4 pt-2' style={{ whiteSpace: "nowrap" }}>30 Nov 2023 08:00</td>
              <td className='pl-4 pt-2'>700</td>
              <td className='pl-20  pt-2'>Electricity</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>30 Nov 2023 12:30</td>
              <td className='pl-4 pt-2'>1500</td>
              <td className='pl-20 pt-2'>Hospital</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>30 Nov 2023 18:45</td>
              <td className='pl-4 pt-2'>5000</td>
              <td className='pl-20 pt-2'>Kenya</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>30 Nov 2023 08:00</td>
              <td className='pl-4 pt-2'>700</td>
              <td className='pl-20 pt-2'>Electricity</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>30 Nov 2023 12:30</td>
              <td className='pl-4 pt-2'>1500</td>
              <td className='pl-20 pt-2'>Hospital</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>30 Nov 2023 18:45</td>
              <td className='pl-4 pt-2'>5000</td>
              <td className='pl-20 pt-2'>Kenya</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
      <div className="flex justify-between  text-black">
        <div className="mt-4 ">
          <h1 className="text-xl font-normal">29 Nov 2023</h1>
        </div>
        
      </div>
      <div className='mt-4' >
        <table className='w-full text-sm' >
          <thead className='border-b-2 border-gray-300'>
            <tr >
              <th className='pr-12'>Date MMHH</th>
              <th >Amount</th>
              <th className='pl-16'>Description</th>
            </tr>
          </thead>
          <tbody >
          <tr >
              <td className='pl-2 pr-2 pt-2' style={{ whiteSpace: "nowrap" }}>29 Nov 2023 08:00</td>
              <td className='pl-4 pt-2'>700</td>
              <td className='pl-20 pt-2'>Electricity</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>29 Nov 2023 12:30</td>
              <td className='pl-4 pt-2'>1500</td>
              <td className='pl-20 pt-2'>Hospital</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>29 Nov 2023 18:45</td>
              <td className='pl-4 pt-2'>5000</td>
              <td className='pl-20 pt-2'>Kenya</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>29 Nov 2023 08:00</td>
              <td className='pl-4 pt-2'>700</td>
              <td className='pl-20 pt-2'>Electricity</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>29 Nov 2023 12:30</td>
              <td className='pl-4 pt-2'>1500</td>
              <td className='pl-20 pt-2'>Hospital</td>
            </tr>
            <tr >
              <td className='pl-2 pt-2'>29 Nov 2023 18:45</td>
              <td className='pl-4 pt-2'>5000</td>
              <td className='pl-20 pt-2'>Kenya</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Statements
