import React from 'react';
import { Grade } from '@/assets';
import * as S from './LevelBox.styled';
import { useResponsive } from '@/hooks/useResponsive';

type Props = {
  level: number;
};

const LevelBox = ({ level }: Props) => {
  const { isPC } = useResponsive();
  const levelArr = new Array(6).fill(0);
  return (
    <S.LevelBoxWrapper>
      {levelArr.map((el, idx) => (
        <Grade width={isPC ? 24 : 18} hight={isPC ? 24 : 18} fill={level - 1 >= idx ? '#ffd400' : '#ccc'} />
      ))}
    </S.LevelBoxWrapper>
  );
};

export default LevelBox;
