import React from 'react';

const NewsCard = (props: {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  author: string;
}) => {
  return (
    <div className='p-6 max-w-sm mx-auto bg-white rounded-lg w-96 h-24 shadow-md flex items-center rounded-lg transition duration-500 ease-in-out hover:bg-indigo-100 transform hover:-translate-y-1 hover:shadow-lg space-x-4'>
      <div className='shrink-0'>
        <img
          className='h-16 w-16 rounded-md'
          src={props.imageUrl}
          alt={props.imageAlt}
        />
      </div>
      <div>
        <div className='text-md font-medium text-black'>{props.title}</div>
        <p className='text-slate-500 text-sm'>{props.subtitle}</p>
        <p className='text-slate-500 text-xs'>{props.author}</p>
      </div>
    </div>
  );
};

export default NewsCard;
