import React from 'react';
import LogoutButton from '../UserLogout/userLogoutButton';
import css from './Header.module.css'

const Header = ({title,sub}) => {
  return( 
  <div className={css.container}>
  <LogoutButton />
  <h1 className={css.wiki}>{title}</h1>
  <h1 className={css.pigeon}>{sub}</h1>

  </div>
  );
};

export default Header;
