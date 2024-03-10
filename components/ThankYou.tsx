import Link from 'next/link';
import React from 'react';

const ThankYouScreen: React.FC = () => {
  return (
    <div className='flex p-8 md:p-24 flex-col items-center justify-center h-full bg-slate-400'>
      <h1 className='text-2xl md:text-4xl mb-4 text-center'>Thank you for completing the survey!</h1>
      <p className='text-lg md:text-2xl text-center'>Your feedback is valuable to us.</p>
      <p className='text-lg md:text-2xl text-center'>See your answers at <Link className='hover:underline text-blue-900' href={'/answer'}>Here</Link></p>
    </div>
  );
};

export default ThankYouScreen;
