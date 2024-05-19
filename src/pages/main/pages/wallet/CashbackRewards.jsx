// CashbackRewards.jsx
import React from 'react';

const CashbackRewards = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Cashback Rewards</h2>
          <p className="text-white">Earn cashback at partner merchants</p>
        </div>
        <div className="bg-white rounded-full p-2">
          <svg className="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="mt-6">
        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-600">Acme Store</div>
            <div className="text-green-500 font-bold">10% Cashback</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-600">TechMart</div>
            <div className="text-green-500 font-bold">5% Cashback</div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button className="bg-white text-green-500 font-bold py-2 px-4 rounded-full">
          View Cashback History
        </button>
      </div>
    </div>
  );
};

export default CashbackRewards;