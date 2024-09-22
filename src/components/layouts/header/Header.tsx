import React from 'react';
import * as S from './Header.styled';
import { Logo } from '@/assets';

const Header = () => {
  return (
    <S.HeaderLayout>
      <div>
        <Logo width={180} height={78} />
      </div>
    </S.HeaderLayout>
  );
};

export default Header;
