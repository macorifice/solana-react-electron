import React from 'react';
import { Link } from 'react-router-dom';
import HistoryMiniCard from './HistoryMiniCard';
import TransactionCard from './TransactionCard';

function History() {
  const historyData = [
    {
      color: 'green',
      label: 'Transaction',
      value: '$ 140.0',
      symbol: '+',
    },
    {
      color: 'cyan',
      label: 'Tickets',
      value: '$ 520.0',
      symbol: '-',
    },
  ];

  return (
    <>
      <div className='flex justify-start p-8'>
        <Link to='/balance'>
          <button className='px-8 py-2 mx-auto text-white bg-indigo-500 rounded-lg transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1'>
            BACK
          </button>
        </Link>
      </div>
      <div className='flex grid grid-col-5 grid-flow-rows space-y-4 mb-8'>
        <div className='justify-start px-8'>
          <label className='block mt-8'>
            <span className='block text-sm font-medium text-gray-300'>
              Date
            </span>
            <label className='relative block'>
              <span className='absolute inset-y-0 right-0 flex items-center pl-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </span>
              <input
                disabled
                className=' bg-transparent block w-full py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='March - April'
                type='text'
                name='date'
              />
            </label>
          </label>
        </div>

        <div className='justify-start px-8'>
          <div className='grid grid-rows-1 grid-flow-col space-x-4'>
            {historyData.map((h) => {
              return (
                <HistoryMiniCard
                  color={h.color}
                  label={h.label}
                  value={h.value}
                  symbol={h.symbol}
                />
              );
            })}
          </div>
        </div>
        <div className='justify-start px-8 text-lg font-extrabold text-gray-300'>
          Today
        </div>
        <div className='justify-center px-8 grid grid-col-5 grid-flow-rows space-y-4'>
          <TransactionCard
            imageUrl={'ANNOTATION'}
            imageAlt={''}
            title={'Canone'}
            message={'$ 4.50'}
            timestamp={'7.00 am'}
            symbol={'-'}
          />
          <TransactionCard
            imageUrl={'CASH'}
            imageAlt={''}
            title={'Bonifico'}
            message={'$ 150.80'}
            timestamp={'4.15 am'}
            symbol={'-'}
          />
          <TransactionCard
            imageUrl={'CART'}
            imageAlt={''}
            title={'Shopping'}
            message={'$ 54.35'}
            timestamp={'3.41 pm'}
            symbol={'+'}
          />
          <TransactionCard
            imageUrl={'ANNOTATION'}
            imageAlt={''}
            title={'Canone'}
            message={'$ 4.50'}
            timestamp={'7.00 am'}
            symbol={'-'}
          />
          <TransactionCard
            imageUrl={'TAX'}
            imageAlt={''}
            title={'Bollo'}
            message={'$ 2.50'}
            timestamp={'5.30 pm'}
            symbol={'+'}
          />
          <TransactionCard
            imageUrl={'CASH'}
            imageAlt={''}
            title={'Bonifico'}
            message={'$ 150.80'}
            timestamp={'4.15 am'}
            symbol={'-'}
          />
        </div>
      </div>
    </>
  );
}

export default History;
