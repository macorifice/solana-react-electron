import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <div className='flex justify-start p-8'>
        <Link to='/balance'>
          <button className='px-8 py-2 mx-auto text-white bg-indigo-500 rounded-lg transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1'>
            BACK
          </button>
        </Link>
      </div>
      <div className='flex grid grid-rows-5 grid-flow-col'>
        <div className='flex justify-center'>
          <img
            className='h-36 w-36 rounded-full ring-2 ring-white'
            src={`https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
            alt=''
          />
        </div>
        <div className='flex justify-center pr-8 pl-8'>
          <label className='block mt-8 w-full'>
            <span className='block text-sm font-medium text-gray-300'>
              Full name
            </span>
            <input
              type='text'
              placeholder='Tony Stark'
              className='mt-1 block w-full px-3 py-2 bg-white border-b text-sm placeholder-slate-400
                        focus:outline-none
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        '
            />
          </label>
        </div>
        <div>
          <label className='block mt-8 w-full pr-8 pl-8'>
            <span className='block text-sm font-medium text-gray-300'>
              Email address
            </span>
            <input
              type='text'
              placeholder='hello@gmail.com'
              className='mt-1 block w-full px-3 py-2 bg-white border-b text-sm placeholder-slate-400
                        focus:outline-none
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        '
            />
          </label>
        </div>
        <div>
          <label className='block mt-8 w-full pr-8 pl-8'>
            <span className='block text-sm font-medium text-gray-300'>
              Password
            </span>
            <input
              type='text'
              placeholder='********'
              className='mt-1 block w-full px-3 py-2 bg-white border-b text-sm placeholder-slate-400
                        focus:outline-none
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        '
            />
            <div className='flex justify-end text-gray-300 text-sm mt-2 transition duration-500 ease-in-out hover:text-blue-600 transform hover:-translate-y-1'>
              Forget password
            </div>
          </label>
        </div>

        <div className='flex justify-center'>
          <button className='w-80 h-12 px-8 py-2 mt-8 mx-auto text-white bg-indigo-500 rounded-md transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1'>
            Edit information
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
