'use client';

import React from 'react';
import { ArrowBackIos, Logo, Logo_w } from '@/assets';
import { useRouter } from 'next/navigation';
import { CustomInput } from '@/components/form';
import { useResponsive } from '@/hooks/useResponsive';
import * as S from './Login.styled';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const { isPC } = useResponsive();

  return (
    <S.LoginContainer>
      <div className='login_header'>
        <button onClick={() => router.push('/')}>
          <ArrowBackIos width={isPC ? 32 : 24} height={isPC ? 32 : 24} fill='#FFFFFF' />
        </button>
        <Logo_w width={200} />
      </div>
      <div className='login_body'>
        <h1>LOGIN</h1>
        <S.LoginForm>
          <CustomInput tag='이메일' placeholder='이메일을 입력해 주세요' />
          <CustomInput tag='비밀번호' placeholder='비밀번호를 입력해 주세요' isPrivate inputType='password' />
          <S.LoginBtn type='submit'>로그인</S.LoginBtn>
        </S.LoginForm>
        <S.LoginFuncWrapper>
          <S.SignUpBtn type='button'>회원가입</S.SignUpBtn>
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
      </div>
    </S.LoginContainer>
  );
};

export default Login;
