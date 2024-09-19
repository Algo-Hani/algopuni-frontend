'use client';

import React, { ReactNode } from 'react';
import { ArrowBackIos, Logo_w } from '@/assets';
import { useRouter } from 'next/navigation';
import { useResponsive } from '@/hooks/useResponsive';
import * as S from './Account.styled';

type Props = {
  children: ReactNode;
};

const Account = ({ children }: Props) => {
  const router = useRouter();
  const { isPC } = useResponsive();
  return (
    <S.AccountContainer>
      <div className='login_header'>
        <button onClick={() => router.push('/')}>
          <ArrowBackIos width={isPC ? 32 : 24} height={isPC ? 32 : 24} fill='#FFFFFF' />
        </button>
        <Logo_w width={300} height={128} />
      </div>
      <div className='login_body'>{children}</div>
    </S.AccountContainer>
  );
};

export default Account;
