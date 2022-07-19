
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/Color logo - no background.png';
// import logo from '../public/White logo - no background.png';


const NavBar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-item-container'>
        <Link href="/">
          <Image src={logo} alt="Travel blog" width={140} height={140} />
        </Link>
      </div>
      <div className='nav-item-container'>
        <p>XXXXXX</p>
      </div>
    </nav>
  )
}

export default NavBar