import React from 'react';
import { Link } from 'react-router-dom';

function FooterMenu() {
  return (
    <>
      <div className='flex justify-center -mb-10 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'>
        <button className='bg-indigo-500 rounded-lg p-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-14 w-14'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z'
          />
        </svg>
        </button>
      </div>
      <div className='flex justify-center md:container md:mx-auto p-6 bg-gray-100 rounded-t-full mt-4'>
        <div className='flex justify-center grid grid-rows-1 grid-flow-col gap-24'>
          <Link to='/home'>
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
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
          </div>
          </Link>
          <Link to='/charts'>
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
                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              />
            </svg>
          </div>
          </Link>
          <Link to='/history'>
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
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          </Link>
          <Link to='/profile'>
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
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FooterMenu;
