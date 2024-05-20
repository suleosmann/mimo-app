import React, { useState } from 'react';

const Pay = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState('');
  const [enterCode, setEnterCode] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  const handleEnterClick = () => {
    setEnterCode(true);
    setScanSuccess(false); 
  };

  const handleQrClick = () => {
    setEnterCode(false);
    setScanSuccess(false); 
  };

  const startScanning = () => {
    setScanning(true);
    setTimeout(() => {
      setResult('Success');
      setScanning(false);
      setScanSuccess(true);
    }, 2000); 
  };

  return (
    <div className='mx-7 my-10'>    
      <div className='flex justify-between'>
        <button className={`bg-custom-green p-2 rounded-lg ${!enterCode ? 'bg-opacity-100' : 'bg-opacity-50'}`} onClick={handleQrClick}>
          Scan QR Code
        </button>
        <button className={`bg-custom-green p-2 rounded-lg ${enterCode ? 'bg-opacity-100' : 'bg-opacity-50'}`} onClick={handleEnterClick}>
          Enter Code
        </button>
      </div>  
      {!enterCode && (
        <div className='space-y-6'>
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
          {scanSuccess && (
            <>
              <input type="text" className='bg-custom-dark-green p-2 w-full rounded-lg' placeholder='Enter Amount'/>
              <button className='w-full bg-custom-green p-2 rounded-lg' onClick={handleEnterClick}>
                Pay
              </button>
            </>
          )}
        </div>
      )}
      {enterCode && (
        <div className='space-y-4 mx-1'>
          <input type="text" className='bg-custom-dark-green mt-8 p-2 w-full' placeholder='Enter Code'/>
          <input type="text" className='bg-custom-dark-green p-2 w-full' placeholder='Enter Amount'/>
          <button className='w-full bg-custom-green p-2 rounded-lg' onClick={handleEnterClick}>
            Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default Pay;
