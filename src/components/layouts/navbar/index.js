import Searchbar from '@/components/containers/searchbar';
import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Website Logo</h1>
      <Searchbar />
    </div>
  );
};

export default Navbar;
