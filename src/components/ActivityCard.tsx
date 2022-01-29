import React from 'react';

const ActivityCard = (props: {
  imageUrl: string;
  imageAlt: string;
  title: string;
  message: string;
}) => {
  return (
    <div className='flex justify-between p-4 max-w-sm mx-auto bg-white rounded-lg w-40 h-40 shadow-md flex items-center space-x-4'>
      <div className='shrink-0'>
        {props.imageUrl === 'BITCOIN' && (
          <svg
            className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Bitcoin</title>
            <path d='M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z' />
          </svg>
        )}
        {props.imageUrl === 'ETHERIUM' && (
          <svg
            className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Ethereum</title>
            <path d='M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z' />
          </svg>
        )}
        {props.imageUrl === 'LITECOIN' && (
          <svg
            className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Litecoin</title>
            <path d='M12 0a12 12 0 1012 12A12 12 0 0012 0zm-.2617 3.6777h2.584a.3425.3425 0 01.33.4356l-2.0312 6.918 1.9062-.582-.4082 1.3847-1.9238.5605-1.248 4.213h6.6757a.3425.3425 0 01.3282.4374l-.582 2a.4586.4586 0 01-.4395.3301H6.7324l1.7227-5.8223-1.9063.5801.42-1.3613 1.9101-.58 2.4219-8.1798a.4557.4557 0 01.4375-.334Z' />
          </svg>
        )}
        {/* <img className='h-12 w-12' src={props.imageUrl} alt={props.imageAlt} /> */}
      </div>
      <div>
        <div className='text-xl font-medium text-black'>{props.title}</div>
        <p className='text-gray-700'>{props.message}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
