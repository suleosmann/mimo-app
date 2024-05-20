import React from 'react';
import ProfileImg from "../../../assets/ladydoll.jpeg";

const Statements = () => {
  const statements = [
    { date: '20 May 2024', entityName: 'KPLC', accountNumber: '276530742', amount: '-KSH. 1,986.00', time: '12:38 PM' },
    { date: '20 May 2024', entityName: 'NSSF', accountNumber: '276530742', amount: '+KSH. 2,500.00', time: '12:38 PM' },
    { date: '20 May 2024', entityName: 'KRA', accountNumber: '276530742', amount: '-KSH. 3,000.00', time: '12:38 PM' },
    { date: '17 May 2024', entityName: 'KPLC', accountNumber: '276530742', amount: '+KSH. 1,000.00', time: '12:38 PM' },
    { date: '17 May 2024', entityName: 'NSSF', accountNumber: '276530742', amount: '-KSH. 500.00', time: '12:38 PM' },
    { date: '14 May 2024', entityName: 'KRA', accountNumber: '276530742', amount: '-KSH. 2,000.00', time: '12:38 PM' },
    { date: '14 May 2024', entityName: 'KPLC', accountNumber: '276530742', amount: '+KSH. 1,200.00', time: '12:38 PM' },
    { date: '14 May 2024', entityName: 'NSSF', accountNumber: '276530742', amount: '-KSH. 1,800.00', time: '12:39 PM' },
    { date: '12 May 2024', entityName: 'KRA', accountNumber: '276530742', amount: '+KSH. 3,500.00', time: '12:38 PM' },
    { date: '11 May 2024', entityName: 'KPLC', accountNumber: '276530742', amount: '-KSH. 1,000.00', time: '12:38 PM' },
  ];

  return (
    <div className='mx-8'>
      <div className='h-[580px] w-[294px]'>
        {statements.map((statement, index) => (
          <div className='mt-6' key={index}>
            {(index === 0 || statement.date !== statements[index - 1]?.date) && (
              <h1 className='font-bold text-sm'>{statement.date}</h1>
            )}
            <div className='flex justify-between text-sm w-[294px] h-[30px]'>
              <div className='flex my-3 font-xs'>
                <div className='bg-gray-300 h-[30px] w-[30px] rounded-full'></div>
                <div className='ml-2'>
                  <h1 className='font-bold'>{statement.entityName}</h1>
                  <h1 className='text-gray-600'>{statement.accountNumber}</h1>
                </div>
              </div>
              <div className='text-right text-xs'>
                <h1 className={`font-bold ${statement.amount.startsWith('+') ? 'text-custom-green' : 'text-red-600'}`}>{statement.amount}</h1>
                <h1>{statement.time}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statements;
