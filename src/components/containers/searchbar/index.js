import Button from '@/components/UI/button';
import Input from '@/components/UI/input';
import React from 'react';

const Searchbar = () => {
  return (
    <div>
      <Input type="text" placeholder="test input" />
      <Button>search</Button>
    </div>
  );
};

export default Searchbar;
