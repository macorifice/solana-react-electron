import React from 'react';
import { Link } from 'react-router-dom';
import AppleIcon from './AppleIcon';
import GoogleIcon from './GoogleIcon';

function Login() {
  return (
    <>
      <div className='grid grid-rows-1 grid-flow-col'>
        <div className='px-8 py-8'>
          {/* <Link to='/'>
            <button className='px-8 py-2 mx-auto text-white bg-indigo-500 rounded-lg transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1'>
              BACK
            </button>
          </Link> */}
          <div className='flex justify-end grid grid-rows-1 grid-flow-col gap-2 mb-4'>
            <div className='text-gray-300'>New user?</div>
            <div className='text-blue-300 transition duration-500 ease-in-out hover:text-blue-600 transform hover:-translate-y-1'>
              Create new account
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center md:container md:mx-auto p-4'>
        <div className='flex justify-center p-8'>
          <div className='flex justify-center grid grid-col-7 grid-flow-rows'>
            <div className='text-black text-5xl tracking-tight'>Log in</div>
            <div className='text-black text-5xl tracking-tight'>
              to continue
            </div>

            <label className='block mt-8'>
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

            <label className='block mt-2'>
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

            <Link to='/balance'>
              <div className='text-center pt-4'>
                <button className='w-80 h-12 px-8 py-2 mx-auto text-white bg-indigo-500 rounded-md transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1'>
                  Log in
                </button>
              </div>
            </Link>

            <div className=' grid grid-cols-3 divide-x p-4 divide-none'>
              <div className='divide-y divide-gray-200 pt-3'>
                <div className='flex justify-center'></div>
                <div className='flex justify-center'></div>
              </div>
              <div className='flex justify-center'>or</div>
              <div className='divide-y divide-gray-200 pt-3'>
                <div className='flex justify-center'></div>
                <div className='flex justify-center'></div>
              </div>
            </div>
            <div className='flex justify-center grid-rows-1 grid-flow-col gap-2'>
              <div className='text-center'>
                <button className='w-50 h-14 px-14 py-2 mx-auto text-white bg-transparent border rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1'>
                  <GoogleIcon />
                </button>
              </div>
              <div>
                <button className='w-50 h-14 px-14 py-2 mx-auto text-white bg-transparent border rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1'>
                  <AppleIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
