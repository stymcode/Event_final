import React from 'react';

// import data
import { hero } from '../data';

// import components
import Stats from './Stats';

const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section className='h-full max-h-[850px] w-full bg-hero bg-right lg:bg-center bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-28'>
      <div className='container mx-auto text-center'>
        {/* title */}
        <h1 className='text-2xl lg:text-[64px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold mb-[30px]'>
          {title}
        </h1>
        {/* subtitle */}
        <h2 className='mb-[30px] lg:mb-[65px] max-w-[627px] mx-auto lg:text-xl'>
          {subtitle}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
