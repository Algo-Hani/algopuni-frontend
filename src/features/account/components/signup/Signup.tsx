'use client';

import React, { useEffect, useState } from 'react';
import { CustomInput } from '@/components/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sinUpSchema } from '../../schema';
import { SignUpInputs } from '../../types';
import { accountApis } from '../../apis';
import { Info } from '@/assets';
import { Toast } from '@/libs/ToastProvider';
import * as S from './Signup.styled';

const Signup = () => {
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
  const [inputCode, setInputCode] = useState('');
  const [isCodeActive, setIsCodeActive] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const onCliCkCheckEmail = () => {
    const data = {
      email: watch().email,
    };
    const sendCodeHandler = async () => {
      try {
        await accountApis.authSendCode(data).then((res) => {
          if (res.data.statusCode === 200) {
            setIsCodeActive(true);
            setTimerStart(true);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    sendCodeHandler();
  };
  const onCliCkCheckCode = () => {
    const data = {
      email: watch().email,
      code: inputCode,
    };
    const sendCodeHandler = async () => {
      try {
        await accountApis.authVerifyCode(data).then((res) => {
          if (res.data.statusCode === 200) {
            setIsConfirm(true);
            setIsCodeActive(false);
          }
        });
      } catch (err: any) {
        Toast.error(
          err.response.data.message ? err.response.data.message : '에러가 발생했습니다. 잠시 후 다시 시도해 주세요.'
        );
      }
    };
    sendCodeHandler();
  };
  const onClickSignUp: SubmitHandler<SignUpInputs> = (data) => {};

  useEffect(() => {
    Toast.error('인증번호가 일치하지 않습니다.');
  }, []);
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
                onClick={onCliCkCheckEmail}
                disabled={!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(watch().email)}
              >
                인증 코드
              </S.FuncBtn>
            )}
          </CustomInput>
          {isCodeActive && (
            <>
              <CustomInput
                placeholder='인증코드를 입력해 주세요'
                info='이메일로 전성된 인증코드를 입력해주세요'
                timer={timer}
                setTimer={setTimer}
                timerStart={timerStart}
                onChange={(e) => setInputCode(e.target.value)}
                value={inputCode}
              >
                <S.FuncBtn type='button' onClick={onCliCkCheckCode}>
                  확인
                </S.FuncBtn>
              </CustomInput>

              <S.EmailResend>
                <div>
                  <Info width={16} height={16} fill='#A9A9A9' />
                  인증코드를 받지 못하셨나요?
                </div>

                <button
                  onClick={() => {
                    onCliCkCheckEmail();
                  }}
                  disabled={timer.minute > 2}
                >
                  인증코드 재전송
                </button>
              </S.EmailResend>
            </>
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
