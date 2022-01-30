import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from './ActivityCard';
import BalanceCard from './BalanceCard';
import FooterMenu from './FooterMenu';
import { interval, timeInterval } from 'rxjs';
import TransactionCard from './TransactionCard';

function Balance() {
  const image = 'https://picsum.photos/200/300?grayscale';
  const seconds = interval(1500);

  const [bitcoinValue, setBitcoinValue] = useState(0);
  const [etheriumValue, setEtheriumValue] = useState(0);
  const [litecoinValue, setLitecoinValue] = useState(0);

  const randomIntFromInterval = (min: number, max: number) => {
    // min and max included
    return (Math.random() * (max - min + 1) + min) / 100;
  };

  useEffect(() => {
    seconds.pipe(timeInterval()).subscribe(
      (value) => {
        const bitcoin = randomIntFromInterval(2, 10).toLocaleString();
        setBitcoinValue(Number(bitcoin) * value.value);

        const etherium = randomIntFromInterval(3, 7).toLocaleString();
        setEtheriumValue(Number(etherium) * value.value);

        const litecoin = randomIntFromInterval(5, 9).toLocaleString();
        setLitecoinValue(Number(litecoin) * value.value);
      },
      (err) => console.log(err)
    );
  }, []);

  return (
    <>
      <div className='grid grid-rows-1 grid-flow-col'>
        <div className='px-8 py-8'>
          <Link to='/'>
            <button className='px-4 py-2 text-white bg-indigo-500 rounded-full transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
                />
              </svg>
            </button>
          </Link>
          <div className='flex justify-end grid grid-rows-1 grid-flow-col gap-2 -mt-11'>
            <img
              className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
              src={image}
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='flex grid grid-col-4 grid-flow-rows p-4'>
        <div className='flex justify-start text-extrabold text-md text-gray-500'>
          Balance
        </div>
        <div className='flex justify-start text-extrabold text-5xl text-black p-2 mb-4'>
          $ 15,378.32
        </div>
        <div className='flex overflow-x-scroll pb-4 hide-scroll-bar'>
          <div className='flex flex-nowrap lg:ml-10 md:ml-5 ml-5 gap-5'>
            <BalanceCard
              imageUrl={'VISA'}
              imageAlt={''}
              title={'VISA'}
              message={'$ 3 520.45'}
            />
            <BalanceCard
              imageUrl={'PAYPAL'}
              imageAlt={''}
              title={'PAYPAL'}
              message={'$ 1 220.60'}
            />
            <BalanceCard
              imageUrl={'MASTERCARD'}
              imageAlt={''}
              title={'MASTERCARD'}
              message={'$ 590.20'}
            />
            <BalanceCard
              imageUrl={'PAYPAL'}
              imageAlt={''}
              title={'PAYPAL'}
              message={'$ 830.50'}
            />
          </div>
        </div>

        <div className='flex justify-start text-extrabold text-xl text-gray-500 mb-4'>
          Activity
        </div>
        <div className='flex overflow-x-scroll pb-4 hide-scroll-bar'>
          <div className='flex flex-nowrap lg:ml-10 md:ml-5 ml-5 gap-5'>
            <ActivityCard
              imageUrl={'BITCOIN'}
              imageAlt={''}
              title={'Bitcoin'}
              message={`${bitcoinValue.toPrecision(3)} BTC`}
            />
            <ActivityCard
              imageUrl={'ETHERIUM'}
              imageAlt={''}
              title={'Etherium'}
              message={`${etheriumValue.toPrecision(3)} ETH`}
            />
            <ActivityCard
              imageUrl={'LITECOIN'}
              imageAlt={''}
              title={'Litecoin'}
              message={`${litecoinValue.toPrecision(3)} LTC`}
            />
          </div>
        </div>

        <div className=' grid grid-cols-3 divide-x p-4 divide-none'>
          <div className='divide-y divide-gray-200 pt-3'>
            <div className='flex justify-start text-extrabold text-xl text-gray-500'>
              Transactions
            </div>
          </div>
          <div className='flex justify-center'></div>
          <div className='divide-y divide-gray-200 pt-3'>
            <Link to='/history'>
            <div className='flex justify-end text-semibold text-md text-blue-300 transition duration-500 ease-in-out hover:text-blue-600 transform hover:-translate-y-1'>
              See all
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
            </Link>
          </div>
        </div>
        <div className='grid grid-col-4 grid-flow-rows gap-5'>
          <TransactionCard
            imageUrl={'CART'}
            imageAlt={''}
            title={'Shopping'}
            message={'$ 54.35'}
            timestamp={'3.41 pm'}
            symbol={'+'}
          />
          <TransactionCard
            imageUrl={'ANNOTATION'}
            imageAlt={''}
            title={'Canone'}
            message={'$ 4.50'}
            timestamp={'7.00 am'}
            symbol={'-'}
          />
          <TransactionCard
            imageUrl={'TAX'}
            imageAlt={''}
            title={'Bollo'}
            message={'$ 2.50'}
            timestamp={'5.30 pm'}
            symbol={'+'}
          />
          <TransactionCard
            imageUrl={'CASH'}
            imageAlt={''}
            title={'Bonifico'}
            message={'$ 150.80'}
            timestamp={'4.15 am'}
            symbol={'-'}
          />
        </div>
      </div>
      <FooterMenu />
    </>
  );
}

export default Balance;
