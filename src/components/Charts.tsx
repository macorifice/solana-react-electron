import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';

function Charts() {
  return (
    <>
      <div className='flex justify-start p-8'>
        <Link to='/balance'>
          <button className='px-8 py-2 mx-auto text-white bg-indigo-500 rounded-lg transition duration-500 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1'>
            BACK
          </button>
        </Link>
      </div>
      <div className='flex justify-center px-2 mb-10'>
        <div className='flex grid grid-col-5 grid-flow-rows space-y-4'>
          <NewsCard
            imageUrl={
              'https://s.yimg.com/ny/api/res/1.2/4NItSORDq2CSqB9IVjxKpQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTUyOQ--/https://s.yimg.com/uu/api/res/1.2/GadOrAxl7DQyciQ3VHlZSA--~B/aD02MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/coindesk_75/678d9a84646fbf6d34f6e2380164f071'
            }
            imageAlt={''}
            title={'Bitcoin Protects Privacy and Fights Oppression'}
            subtitle={'Sat, January 29, 2022, 11:44 AM'}
            author={'Murtaza Hussain'}
          />
          <NewsCard
            imageUrl={
              'https://s.yimg.com/ny/api/res/1.2/0UtRMs7mmNBeqWKq4mIn5w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTUyOQ--/https://s.yimg.com/uu/api/res/1.2/ScLDz1KRUvTzUd470El9iQ--~B/aD02MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/coindesk_75/770cfad7096c49c4b43e501e76ea04f7'
            }
            imageAlt={''}
            title={`Wonderland's (and DeFi's) Anonymity Problem`}
            subtitle={'Sat, January 29, 2022, 11:14 AM'}
            author={'Joseph Weinberg'}
          />
          <NewsCard
            imageUrl={
              'https://s.yimg.com/ny/api/res/1.2/k8EkbwmDSkh_XPsFVcHD_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ4MA--/https://s.yimg.com/uu/api/res/1.2/JM4aV7Ntq8AqPydnQpvfnw--~B/aD01NDU7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/coin_rivet_596/165539dbb0673a77b9b18c41078f6192'
            }
            imageAlt={''}
            title={
              'Nansen report shows crypto going multi-chain with DeFi and NFTs'
            }
            subtitle={'Sat, January 29, 2022, 3:50 AM'}
            author={'Teuta Franjkovic'}
          />
          <NewsCard
            imageUrl={
              'https://s.yimg.com/ny/api/res/1.2/VLW9NL65aI2OBUOIiAbDRw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM1Mw--/https://s.yimg.com/uu/api/res/1.2/cQDQeBaUIJOgKO0n4mQ4SA--~B/aD02NDA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/Barrons.com/7afb4aa8eed7a8cbfa86fddeeb85b17c'
            }
            imageAlt={''}
            title={'Bitcoin (BTC) Finds Support from a NASDAQ 100 Friday Rally'}
            subtitle={'Fri, January 28, 2022, 8:55 PM'}
            author={'Bob Mason'}
          />
          <NewsCard
            imageUrl={
              'https://s.yimg.com/ny/api/res/1.2/9lriFpFe3ltuG9lOpLE_wA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM5Nw--/https://s.yimg.com/uu/api/res/1.2/xLRcyVHNZu28VT9OLWH8nQ--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/d22acb35041b7d5c40a11a1f552bd5e6'
            }
            imageAlt={''}
            title={
              'Crypto Slide Puts Outlook of a Billion Investors by 2023 to Test'
            }
            subtitle={'Sat, January 29, 2022, 9:00 AM'}
            author={'Akayla Gardner'}
          />
          <NewsCard
            imageUrl={
              'https://s.yimg.com/ny/api/res/1.2/qscuZ6dFxo8qJbnIS.HVHw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTUyOQ--/https://s.yimg.com/uu/api/res/1.2/jZo0dTnweHtyM47OzZNkNA--~B/aD02MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/coindesk_75/0db02379cca8df98018f6a67ba12511b'
            }
            imageAlt={''}
            title={
              'Make Bitcoin Legal Tender in Arizona'
            }
            subtitle={'Fri, January 28, 2022, 3:30 PM'}
            author={'Brandy Betz'}
          />
        </div>
      </div>
    </>
  );
}

export default Charts;
