import React, { useState } from 'react';

const Pay = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState('');

  const startScanning = () => {
    setScanning(true);
    setTimeout(() => {
      setResult('Success');
      setScanning(false);
    }, 2000); 
  };

  return (
    <div className='mx-7 my-10'>    
    <div className='flex justify-between'>
    <h2 className="text-lg font-semibold mt-2 pl-2">Scan QR Code</h2>
    <button className='bg-custom-green p-2 rounded-lg'>
      Enter Code
    </button>
</div>  
    <div className="relative flex justify-center items-center h-64 mt-6 ">
      <div className="absolute inset-0 bg-custom-pastel opacity-50 z-10 border-1 rounded-3xl"></div>
      <div className="relative z-20 p-4 border-4 border-white">
        <button className="bg-custom-green text-white py-2 px-4 rounded" onClick={startScanning}>
          Start Scanning
        </button>
        {scanning && <p className="text-white mt-4">Scanning...</p>}
        {result && <p className="text-white mt-4">Result: {result}</p>}
      </div>
    </div>
    </div>

  );
};

export default Pay;
