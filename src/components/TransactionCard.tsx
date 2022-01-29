import React from 'react';

const TransactionCard = (props: {
  imageUrl: string;
  imageAlt: string;
  title: string;
  message: string;
  timestamp: string;
  symbol: string;
}) => {
  return (
    <div className='flex justify-around p-8 max-w-sm mx-auto bg-white rounded-lg w-96 h-20 shadow-md flex items-center space-x-4'>
      <div className='shrink-0'>
        {props.imageUrl === 'CART' && (
          //   <img className='h-12 w-12' src={props.imageUrl} alt={props.imageAlt} />
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          </div>
        )}
        {props.imageUrl === 'ANNOTATION' && (
          <svg
            className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
            />
          </svg>
        )}
        {props.imageUrl === 'CASH' && (
          <svg
            className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
        )}
        {props.imageUrl === 'TAX' && (
          <svg
            className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            />
          </svg>
        )}
      </div>
      <div>
        <div className='text-sm font-extrabold text-black'>{props.title}</div>
      </div>
      <div>
        {props.symbol === '+' && (
          <div className='row-end-1 text-sm font-medium text-green-400'>
            + {props.message}
          </div>
        )}
        {props.symbol === '-' && (
          <div className='row-end-1 text-sm font-medium text-red-400'>
            - {props.message}
          </div>
        )}
      </div>
      <div>
        <p className='text-xs text-slate-500'>{props.timestamp}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
