import React, { useEffect, useState } from 'react';
import { Keypair, Connection, clusterApiUrl } from '@solana/web3.js';

function Solana() {
  const [state, setstate] = useState({
    keypair: {},
    connection: {},
  });

  // eslint-disable-next-line prefer-const
  let secretKey = Uint8Array.from([
    202, 171, 192, 129, 150, 189, 204, 241, 142, 71, 205, 2, 81, 97, 2, 176, 48,
    81, 45, 1, 96, 138, 220, 132, 231, 131, 120, 77, 66, 40, 97, 172, 91, 245,
    84, 221, 157, 190, 9, 145, 176, 130, 25, 43, 72, 107, 190, 229, 75, 88, 191,
    136, 7, 167, 109, 91, 170, 164, 186, 15, 142, 36, 12, 23,
  ]);

  // useEffect(() => {
  //   async () => {

  //     setstate(keypair);

  //     const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  //     console.log(connection);

  //     const account = await connection.getAccountInfo(keypair.publicKey);

  //     console.log(account.data);
  //   };
  // }, []);

  const pairKey = async () => {
    console.log('press');
    const keypair = Keypair.fromSecretKey(secretKey);

    console.log(keypair);
    setstate({ ...state, keypair: keypair });
  };

  const connect = async () => {
    const connection = await new Connection(
      clusterApiUrl('devnet'),
      'confirmed'
    );
    console.log(connection);
    setstate({ ...state, connection: connection });
  };

  return (
    <div>
      <button onClick={pairKey}>PAIR KEY</button>
      <button onClick={connect}>CONNECT</button>
    </div>
  );
}

export default Solana;
