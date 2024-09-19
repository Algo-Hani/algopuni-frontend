'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CustomInput } from '@/components/form';
import * as S from './Login.styled';

const Login = () => {
  const router = useRouter();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const onClickLogin = () => {
    const data = {
      email: inputEmail,
      password: inputPassword,
    };
    const loginHandler = () => {
      console.log(data);
    };
    loginHandler();
  };
  return (
    <>
      <h1>로그인</h1>
      <S.LoginForm onSubmit={onClickLogin}>
        <CustomInput
          tag='이메일'
          placeholder='이메일을 입력해 주세요'
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <CustomInput
          tag='비밀번호'
          placeholder='비밀번호를 입력해 주세요'
          isPrivate
          inputType='password'
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <S.LoginBtn type='submit'>로그인</S.LoginBtn>
      </S.LoginForm>
      <S.LoginFuncWrapper>
        <S.SignUpBtn type='button' onClick={() => router.push('/signup')}>
          회원가입
        </S.SignUpBtn>
        <S.FindFunc>
          <button>아이디 찾기</button>
          <div />
          <button>비밀번호 찾기</button>
        </S.FindFunc>
        <S.Social>
          <button>
            <Image src={'/images/kakao.png'} width={64} height={64} alt='kakao social login icon' />
          </button>
          <button>
            <Image src={'/images/naver.png'} width={64} height={64} alt='kakao social login icon' />
          </button>
          <button>
            <Image src={'/images/google.png'} width={64} height={64} alt='kakao social login icon' />
          </button>
          <button>
            <Image src={'/images/github.png'} width={64} height={64} alt='kakao social login icon' />
          </button>
        </S.Social>
      </S.LoginFuncWrapper>
    </>
  );
};

export default Login;
