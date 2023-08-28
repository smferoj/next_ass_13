import Link from 'next/link';
import React from 'react';

const CookieBtn = ({ onClick, label }) => {
  return (
  
    <Link href= "/preferences">
  <button onClick={onClick}  className='bg-red-100 text-black px-3 py-2 rounded-md'>
      {label}
    </button>
    </Link>
    
  );
};

export default CookieBtn;