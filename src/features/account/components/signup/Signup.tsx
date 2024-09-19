'use client';

import React, { useState } from 'react';
import { CustomInput } from '@/components/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sinUpSchema } from '../../schema';
import { SignUpInputs } from '../../types';
import * as S from './Signup.styled';

const Signup = () => {
  const [isCodeActive, setIsCodeActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<SignUpInputs>({
    resolver: yupResolver(sinUpSchema),
  });

  const timerInitialState = { minute: 3, seconds: 0 };
  const [timer, setTimer] = useState(timerInitialState);
  const [timerStart, setTimerStart] = useState(false);

  const onCliCkCheckEmail = () => {};
  const onClickSignUp: SubmitHandler<SignUpInputs> = (data) => {};

  return (
    <>
      <h1>회원가입</h1>
      <S.SignupForm onSubmit={handleSubmit(onClickSignUp)}>
        <CustomInput
          tag='닉네임'
          placeholder='닉네임을 입력해 주세요'
          info='4~10자 영문(대소문자 구분), 한글, 숫자 조합'
          register={register('nickName')}
          error={errors.nickName?.message}
          maxLength={10}
        />
        <div>
          <CustomInput tag='이메일' placeholder='이메일을 입력해 주세요' register={register('email')} maxLength={30}>
            {!isCodeActive && (
              <S.FuncBtn
                type='button'
                onClick={() => setIsCodeActive(true)}
                disabled={!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(watch().email)}
              >
                중복확인
              </S.FuncBtn>
            )}
          </CustomInput>
          {isCodeActive && (
            <CustomInput
              placeholder='인증코드를 입력해 주세요'
              info='이메일로 전성된 인증코드를 입력해주세요'
              timer={timer}
              setTimer={setTimer}
              timerStart={timerStart}
            >
              <S.FuncBtn type='button' onClick={() => setIsCodeActive(false)}>
                확인
              </S.FuncBtn>
            </CustomInput>
          )}
        </div>
        <CustomInput
          tag='비밀번호'
          placeholder='비밀번호를 입력해 주세요'
          isPrivate
          inputType='password'
          info='영문, 숫자, 특수문자 조합 8~16자리를 입력해 주세요'
          register={register('password')}
          error={errors.password?.message}
          maxLength={18}
        />
        <CustomInput
          tag='비밀번호 확인'
          placeholder='비밀번호를 다시 한번 입력해 주세요'
          isPrivate
          inputType='password'
          register={register('confirmPassword')}
          error={errors.confirmPassword?.message}
          maxLength={18}
        />
        <S.SignupBtn type='submit'>회원가입</S.SignupBtn>
      </S.SignupForm>
    </>
  );
};

export default Signup;
