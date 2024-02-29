import { Link } from '@tanstack/react-router';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import avatar from '../../assets/user-circle.svg';
import logo from '../../assets/TripSquad-logo.svg';
import { Button } from '../ui/button';

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
        <Link
          to='/about'
          className='text-lg font-medium transition-colors'
          inactiveProps={{
            className: 'text-muted',
          }}
        >
          About
        </Link>
        {isLoggedIn ? (
          <Avatar className='cursor-pointer' onClick={onLogInClick}>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>
              <img src={avatar} alt='Profile Icon' width={48} height={48} />
            </AvatarFallback>
          </Avatar>
        ) : (
          <Button onClick={onLogInClick}>Log In</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
