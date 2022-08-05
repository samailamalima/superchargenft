import React, {useState} from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false)
  
  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-2 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-[#fff] ml-2 flex-auto justify-self-auto'>SuperchargeYourNFT</h1>
        </div>
        <div className='flex md:flex'>
          <ul className='flex text-white items-center'>
            <button className='ml-4'>Join Waitlist</button>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <button className='m-8'>Join Waitlist</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;