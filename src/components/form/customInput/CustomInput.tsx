import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@/assets';
import * as S from './CustomInput.styled';
import { useResponsive } from '@/hooks/useResponsive';

interface ICustomInput extends ComponentPropsWithoutRef<'input'> {
  tag?: string;
  error?: string;
  isPrimary?: boolean;
  isPrivate?: boolean;
  inputType?: string;
}

const CustomInput = ({
  tag,
  error,
  isPrimary = false,
  isPrivate = false,
  inputType = 'text',
  ...props
}: ICustomInput) => {
  const { isPC } = useResponsive();
  const [isShown, setIsShown] = useState(false);

  return (
    <S.InputWrapper>
      {tag && (
        <p>
          {isPrimary && <span>*</span>}
          {tag}
        </p>
      )}
      <S.Input>
        <input type={inputType === 'password' && !isShown ? 'password' : 'text'} {...props} />
        {isPrivate && (
          <button type='button' onClick={() => setIsShown((prev) => !prev)}>
            {isShown ? (
              <Visibility width={isPC ? 24 : 18} height={isPC ? 24 : 18} fill='#FF4D35' />
            ) : (
              <VisibilityOff width={isPC ? 24 : 18} height={isPC ? 24 : 18} fill='#A9A9A9' />
            )}
          </button>
        )}
      </S.Input>
    </S.InputWrapper>
  );
};

export default CustomInput;
