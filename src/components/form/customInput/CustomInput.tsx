import React, { ComponentPropsWithoutRef, ReactNode, useEffect, useState } from 'react';
import { Info, Visibility, VisibilityOff } from '@/assets';
import * as S from './CustomInput.styled';
import { useResponsive } from '@/hooks/useResponsive';
import { UseFormRegisterReturn } from 'react-hook-form';
import Timer from '@/components/timer/Timer';

interface ICustomInput extends ComponentPropsWithoutRef<'input'> {
  tag?: string;
  error?: string;
  isPrimary?: boolean;
  isPrivate?: boolean;
  inputType?: string;
  info?: string;
  children?: ReactNode;
  register?: UseFormRegisterReturn;
  timer?: any;
  setTimer?: any;
  timerStart?: any;
}

const CustomInput = ({
  tag,
  error,
  isPrimary = false,
  isPrivate = false,
  inputType = 'text',
  info,
  children,
  register,
  timer,
  setTimer,
  timerStart,
  ...props
}: ICustomInput) => {
  const { isPC } = useResponsive();
  const [isShown, setIsShown] = useState(false);

  return (
    <S.InputWrapper>
      <S.InputTagWrapper>
        {tag && (
          <p className='custom_input_tag'>
            {isPrimary && <span>*</span>}
            {tag}
          </p>
        )}
        {error && <p className='custom_input_error'>{error}</p>}
      </S.InputTagWrapper>
      <S.InputFuncWrapper>
        <S.Input>
          <input type={inputType === 'password' && !isShown ? 'password' : 'text'} {...props} {...register} />
          {timer && <Timer timer={timer} setTimer={setTimer} startTimer={timerStart} />}
          {isPrivate && (
            <button type='button' onClick={() => setIsShown((prev) => !prev)}>
              {isShown ? (
                <Visibility width={isPC ? 20 : 18} height={isPC ? 24 : 18} fill='#FF4D35' />
              ) : (
                <VisibilityOff width={isPC ? 20 : 18} height={isPC ? 24 : 18} fill='#A9A9A9' />
              )}
            </button>
          )}
        </S.Input>
        {children && children}
      </S.InputFuncWrapper>

      {info && (
        <S.InfoBox>
          <Info width={16} height={16} fill='#A9A9A9' />
          {info}
        </S.InfoBox>
      )}
    </S.InputWrapper>
  );
};

export default CustomInput;
