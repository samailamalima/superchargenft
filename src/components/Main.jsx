import React from 'react';

import heroVid from '../assets/bgimage.mp4';

const Main = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-left text-white px-2 text-left'>
        <p>Easy Access</p>
        <h1 className='py-6'>
          <span className='text from-[#4BCFFA] to-[#0F02C3]'>SUPERCHARGE</span> <span className='text-gradient-to-r from-[#0F02C3] to-[#EE1597]'>NFTs</span>
        </h1>
        <p className='text-xl py-4'>
        Activate upgradeable utility and passive, risk-free yield for your NFTs with <br/>our revolutionary and secure ‘Master Token’ technology.
        </p>
      </div>
    </div>
  );
};

export default Main;