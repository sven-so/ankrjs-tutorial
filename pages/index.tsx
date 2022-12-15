/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useNfts } from '../hooks';
import { getNfts } from '../utils';

const Home: NextPage = () => {
  const [walletAddress, setWalletAddress] = useState(
    '0xe4bBCbFf51e61D0D95FcC5016609aC8354B177C4'
  );

  useEffect(() => {
    (async () => {
      const { nfts } = await getNfts(walletAddress);
      console.log({ nfts });
    })();
  }, [walletAddress]);

  return (
    <div className='p-10 flex flex-col items-center'>
      <h1 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-6xl mb-4"'>
            NFT Viewer
       </h1>

      <div className='flex-left flex-col mt-4'>
        <label className='text-zinc-700 text-2xl font-extrabold' htmlFor='wallet-address'>
         &nbsp; Wallet address: &nbsp;
        </label>
        <input
          id='wallet-address'
          type='text'
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className='rounded p-3 w-[425px] border'
          placeholder='Enter a wallet address here to view NFTs'
        />
      </div>
    </div>
  );
};

export default Home;