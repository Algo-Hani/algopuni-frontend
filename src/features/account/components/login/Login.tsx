'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CustomInput } from '@/components/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginInputs } from '../../types';
import { accountApis } from '../../apis';
import { Toast } from '@/libs/ToastProvider';
import { useSetRecoilState } from 'recoil';
import { authAccessTokenState } from '@/atoms/auth';
import instance from '@/apis/axios';
import Cookies from 'universal-cookie';
import * as S from './Login.styled';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const cookies = new Cookies();
  const { register, handleSubmit } = useForm<LoginInputs>();

  const setAccessToken = useSetRecoilState(authAccessTokenState);
  const onClickLogin: SubmitHandler<LoginInputs> = (data) => {
    const loginHandler = async () => {
      try {
        await accountApis.authLogin(data).then((res) => {
          if (res.data.status === 'SUCCESS') {
            cookies.set('USER_REFRESH_TOKEN', res.data.data.refreshToken.token, {
              path: '/',
            });
            console.log(res.data);
            instance.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.accessToken.token}`;
            setAccessToken(res.data.data.accessToken.token);
            Toast.success('로그인이 완료되었습니다.');
            router.push('/');
          }
        });
      } catch (err: any) {
        Toast.error(
          err.response.data.message ? err.response.data.message : '에러가 발생했습니다. 잠시 후 다시 시도해 주세요.'
        );
      }
    };

    loginHandler();
  };
  return (
    <>
      <h1>로그인</h1>
      <S.LoginForm onSubmit={handleSubmit(onClickLogin)}>
        <CustomInput tag='이메일' placeholder='이메일을 입력해 주세요' register={register('id')} />
        <CustomInput
          tag='비밀번호'
          placeholder='비밀번호를 입력해 주세요'
          isPrivate
          inputType='password'
          register={register('password')}
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
          <Link href='https://api.user.algopuni.site/oauth2/authorization/kakao'>
            <Image src={'/images/kakao.png'} width={64} height={64} alt='kakao social login icon' />
          </Link>
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
