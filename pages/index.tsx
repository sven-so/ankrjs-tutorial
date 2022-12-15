/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useNfts } from '../hooks';
import { getNfts } from '../utils';

const Home: NextPage = () => {
  const [walletAddress, setWalletAddress] = useState(
    '0xe4bBCbFf51e61D0D95FcC5016609aC8354B177C4'
  );

  const { nfts, loading, error } = useNfts(walletAddress);

  useEffect(() => {
    (async () => {
      const { nfts } = await getNfts(walletAddress);
      console.log({ nfts });
    })();
  }, [walletAddress]);

  return (
    <div className='p-10 flex flex-col items-center'>
      ...
      <div className='grid grid-cols-4 mt-8 gap-4'>
        {nfts.map((nft) => {
          return (
            <div
              key={`${nft.contractAddress}/${nft.tokenId}`}
              className='flex flex-col rounded border p-4'
            >
              <img
                className='w-[200px] h-[200px] rounded shadow'
                src={nft.imageUrl}
                alt={nft.name}
              />
              <span className='font-bold mt-8'>{nft.name}</span>
              <span>{nft.collectionName}</span>
            </div>
          );
        })}

        {error && (
          <div className='flex flex-col items-center mt-8'>
            <p className='text-red-700'>
              Error: {JSON.stringify(error, null, 2)}
            </p>
          </div>
        )}
      </div>

      <footer className='flex flex-col gap-2 mt-16 items-center'>
        <Link href='https://github.com/theekrystallee/ankrjs-tutorial'>
          <a className='text-zinc-700 underline'>Source code</a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;