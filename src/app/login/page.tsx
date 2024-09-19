import React from 'react';
import { NextPage } from 'next';
import Account from '@/features/account/components/Account';
import Login from '@/features/account/components/login/Login';

const LoginPage: NextPage = () => {
  return (
    <Account>
      <Login />
    </Account>
  );
};

export default LoginPage;
