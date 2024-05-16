import React from 'react'
import { FaBell } from "react-icons/fa";
import ProfileImg from "../../../assets/ladydoll.jpeg";

const Notification = () => {
  return (
      <div className='mx-8 '>
      <div className="flex justify-between mt-16  text-custom-dark-green">
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
      </div>
    </div>
  )
}

export default Notification
