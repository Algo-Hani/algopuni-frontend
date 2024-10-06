'use client';
import React from 'react';
import instance from '@/apis/axios';
import { authAccessTokenState } from '@/atoms/auth';
import { Toast } from '@/libs/ToastProvider';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import Cookies from 'universal-cookie';

const Oauth2Success = () => {
  const searchParams = useSearchParams();
  const cookies = new Cookies();
  const router = useRouter();
  const setAccessToken = useSetRecoilState(authAccessTokenState);
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  cookies.set('USER_REFRESH_TOKEN', refreshToken, {
    path: '/',
  });
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  setAccessToken(accessToken);
  Toast.success('로그인이 완료되었습니다.');
  router.push('/');

  return <div></div>;
};

export default Oauth2Success;
