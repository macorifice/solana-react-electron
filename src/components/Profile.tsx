import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className='flex justify-center p-8'>
      <Link to='/'>
        <button className='px-8 py-2 mx-auto text-white bg-indigo-500 rounded-lg transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1'>
          BACK
        </button>
      </Link>
      Profile
    </div>
  );
}

export default Profile;
