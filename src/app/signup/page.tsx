import React from 'react';
import Account from '@/features/account/components/Account';
import Signup from '@/features/account/components/signup/Signup';

const page = () => {
  return (
    <Account>
      <Signup />
    </Account>
  );
};

export default page;
