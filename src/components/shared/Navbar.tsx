import { Link } from '@tanstack/react-router';
import { useState } from 'react';

import { AvatarButton } from '@/components/shared/AvatarButton';
import logo from '@/assets/TripSquad-logo.svg';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogInClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className='flex items-center space-x-4 lg:space-x-6 bg-muted-foreground py-2 px-8 justify-between'>
      <Link
        to='/'
        className='text-lg font-medium transition-colors'
        inactiveProps={{
          className: 'text-muted',
        }}
      >
        <div className='flex flex-row items-center gap-2'>
          <img src={logo} alt='TripSquad logo' width={48} height={48} />
          <span>TripSquad</span>
        </div>
      </Link>
      <div className='flex gap-4 items-center'>
        <div className='mr-8 flex gap-6'>
          <Link
            to='/support'
            className='text-md font-medium transition-colors'
            inactiveProps={{
              className: 'text-muted',
            }}
          >
            Support
          </Link>
          <Link
            to='/trips'
            className='text-md font-medium transition-colors'
            inactiveProps={{
              className: 'text-muted',
            }}
          >
            Trips
          </Link>
        </div>
        {isLoggedIn ? (
          <AvatarButton logoutFunction={onLogInClick} />
        ) : (
          <Button onClick={onLogInClick}>Log In</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
