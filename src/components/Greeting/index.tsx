import React, { ReactNode } from 'react';

interface IGreet {
  name : ReactNode;
}

const Greeting: React.FC<IGreet> = ({name}) => {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return (
    <div>
      <h3 className='text-black text-2xl font-normal mb-6'>{greeting}, <span className='font-semibold capitalize'>{name}!</span></h3>
    </div>
  );
}

export default Greeting;




