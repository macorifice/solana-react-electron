import React from 'react';
import { Link } from 'react-router-dom';
import SplashIcon from './SplashIcon';

function SplashScreen() {
  const title = 'Welcome to ';
  const appName = 'Sorectron';
  const subTitle = 'Your best crypto wallet partner !';
  const textButton = 'Start Now';
  return (
    <>
      <div className='flex justify-center p-8'>
        <SplashIcon />
      </div>
      <div className='flex justify-center grid grid-rows-4 grid-flow-col'>
        <div className='flex justify-center'>
          <blockquote className='text-2xl font-semibold italic text-center text-slate-900 p-2'>
            {title}
            <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block'>
              <span className='relative text-white'>{appName}</span>
            </span>
          </blockquote>
          <p className='text-3xl font-bold'></p>
        </div>
        <div className='flex justify-center'>
          <p className='text-sm text-center text-gray-400 p-2'>{subTitle}</p>
        </div>
        <Link to='/home'>
          <div className='text-center'>
            <button className='px-8 py-2 mx-auto text-white bg-indigo-500 rounded transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 animate-bounce'>
              {textButton}
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SplashScreen;
