import React from 'react';

function HistoryMiniCard(props: {
  color: string;
  label: string;
  symbol: string;
  value: string;
}) {
  return (
    <>
      {props.color === 'green' && (
        <div className='bg-green-100 p-6 max-w-sm mx-auto bg-white rounded-lg w-48 h-10 shadow-md flex items-center space-x-4'>
          <div className='grid grid-rows-1 grid-flow-col space-between'>
            <div className='text-sm font-semibold text-gray-300 mt-1 -mx-3 mr-3'>
              {props.label}
            </div>
            <div className='text-sm font-semibold mt-1'>
              {props.symbol} {props.value}
            </div>
          </div>
        </div>
      )}

      {props.color === 'cyan' && (
        <div className='bg-cyan-100 p-6 max-w-sm mx-auto bg-white rounded-lg w-48 h-10 shadow-md flex items-center space-x-4'>
          <div className='grid grid-rows-1 grid-flow-col space-between'>
            <div className='text-sm font-semibold text-gray-300 mt-1 -mx-3 mr-3'>
              {props.label}
            </div>
            <div className='text-sm font-semibold mt-1'>
              {props.symbol} {props.value}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HistoryMiniCard;
