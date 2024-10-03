import React from 'react';
import * as S from './MenuBtn.styled';

type Props = {
  isActive: boolean;
  onClickToggle: () => void;
};
const MenuBtn = ({ isActive, onClickToggle }: Props) => {
  return (
    <S.HamburgerBtn onClick={onClickToggle} $isActive={isActive}>
      <div>
        <div className='bar top'></div>
        <div className='bar middle'></div>
        <div className='bar bottom'></div>
      </div>
    </S.HamburgerBtn>
  );
};

export default MenuBtn;
