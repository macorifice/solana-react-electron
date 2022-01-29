import React from 'react';

const BalanceCard = (props: {
  imageUrl: string;
  imageAlt: string;
  title: string;
  message: string;
}) => {
  return (
    <div className='p-6 max-w-sm mx-auto bg-white rounded-lg w-80 h-20 shadow-md flex items-center border border-indigo-500 space-x-4'>
      <div className='shrink-0'>
        {props.imageUrl === 'VISA' && (
          //   <img className='h-12 w-12' src={props.imageUrl} alt={props.imageAlt} />
          <div>
            <svg
              className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Visa</title>
              <path d='M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z' />
            </svg>
          </div>
        )}
        {props.imageUrl === 'PAYPAL' && (
          <svg
            className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>PayPal</title>
            <path d='M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z' />
          </svg>
        )}
        {props.imageUrl === 'MASTERCARD' && (
          <svg
            className='h-8 w-8 transition duration-500 ease-in-out hover:fill-indigo-500 transform hover:-translate-y-1'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>MasterCard</title>
            <path d='M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031-.058.049-.12.098-.181.146 1.177.783 2.588 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.094-3.32-7.416-7.416-7.416zM12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.987-4.236-2.551-5.595-.09-.08-.184-.156-.28-.231z' />
          </svg>
        )}
      </div>
      <div>
        <div className='text-xl font-medium text-black'>{props.title}</div>
        <p className='text-slate-500'>{props.message}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
