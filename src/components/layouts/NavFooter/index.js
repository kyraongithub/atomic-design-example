import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

const NavFooter = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default NavFooter;
