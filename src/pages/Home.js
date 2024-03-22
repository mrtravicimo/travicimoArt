import React from 'react';
import WomanImg from '../img/home/woman.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text & img wrapper */}
      <div className='flex flex-col justify-center'>
        {/* text */}
        <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0
        lg:w-auto z-10 lg:absolute flex flex-col 
        justify-center items-center lg:items-start'>
          <h1 className='h1'>
            Artist <br /> & Music 
          </h1>
        </div>
         {/* image */}
        <div>image</div>
      </div>
    </div>
    </section >;
};

export default Home;
