import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import ProfileImg from '../../../assets/ladydoll.jpeg';

const Beneficiaries = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const data = [
    { name: 'Tim Mwaniki', phone: '0700123456' },
    { name: 'Duncan Osoro', phone: '011987654' },
    { name: 'Elizabeth Ojiambo', phone: '0712456789' },
    { name: 'Fulgence Ondoro', phone: '0700123456' },
    { name: 'Regina Kirima', phone: '0712456789' },
    { name: 'Patrick Mahomes', phone: '0700123456' },
  ];

  const handleClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  

  return (
    <div className='mx-8 '>
      <div className='flex flex-col w-[320px] h-[416px] space-y-3 mt-12'>
        {data.map((item, index) => (
          <div key={index} className='flex flex-col bg-white p-2 rounded-lg' >
            <div onClick={() => handleClick(index)}>
            <h1>{item.name}</h1>
            <h1>{item.phone}</h1>
              </div>
                
            {clickedIndex === index && (
              <div className='w-full h-[62px] border-t-2 text-xs pt-1'>
                <h1>Enter Amount</h1>
                <div className='space-x-1 relative'>
                  <input type='number' placeholder='Enter Amount' className='pl-2 text-xl text-white w-[240px] h-[42px] bg-custom-pastel rounded-lg border'/>
                  <button className='absolute bottom-0.5 bg-custom-green p-2 rounded-lg h-10 font-bold text-custom-dark-green text-lg'>SEND</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <button className='bg-custom-green text-custom-dark-green font-bold w-[320px] h-[44px] rounded-lg absolute bottom-28'>
          ADD BENEFICIARY
        </button>
      </div>
    </div>
  );
};

export default Beneficiaries;
