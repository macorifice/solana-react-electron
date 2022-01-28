import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='md:container md:mx-auto p-10'>
      <Link to='/'>
        <button className='px-8 py-2 mx-auto text-white bg-indigo-500 rounded transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1'>
          BACK
        </button>
      </Link>
      <div className='flex justify-center md:container md:mx-auto p-8'>
        HOME
      </div>
    </div>
  );
}

export default HomePage;
