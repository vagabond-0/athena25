import React from 'react';

const AboutAthena = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-[#080616] via-[#B81033] to-[#080616] text-white flex flex-col justify-center items-center p-4 md:p-8 font-poppins'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1
          className='text-4xl md:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400'
          style={{ fontFamily: "Retro Signed" }}
        >
          Athena is HERE!
        </h1>

        <div className='space-y-6 text-lg md:text-xl leading-relaxed'>
          <p className='mb-4'>
            ISTE TKMCE proudly presents ATHENA '25, a vibrant platform where innovation sparks, creativity thrives, and dreams take flight. It’s where collaboration fuels groundbreaking ideas and talent meets boundless passion.
          </p>

          <p className='mb-4'>
            ATHENA '25 isn’t just an event; it’s a tribute to the dreamers and innovators who dare to push boundaries and redefine the future.
          </p>

          <div className='mt-8 p-6  rounded-lg backdrop-blur-sm'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-yellow-300'>
              Revolutionizing Tomorrow with Technology
            </h2>
          </div>
        </div>
      </div>

      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-200/20 via-transparent to-transparent'></div>
      </div>
    </div>
  );
};

export default AboutAthena;
