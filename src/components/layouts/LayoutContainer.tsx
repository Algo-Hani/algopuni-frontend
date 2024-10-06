'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from './header/Header';
import { usePathname } from 'next/navigation';
import MobileMenu from './header/mobileMenu/MobileMenu';
import { useResponsive } from '@/hooks/useResponsive';
import Cookies from 'universal-cookie';
import { accountApis } from '@/features/account/apis';
import { Toast } from '@/libs/ToastProvider';
import instance from '@/apis/axios';
import { authAccessTokenState } from '@/atoms/auth';
import { useSetRecoilState } from 'recoil';

interface LayoutContentProps {
  children: ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const [isMounted, setIsMounted] = useState(false);
  const setAccessToken = useSetRecoilState(authAccessTokenState);
  const cookies = new Cookies();
  const pathname = usePathname();
  const { isPC } = useResponsive();
  const refreshToken = cookies.get('USER_REFRESH_TOKEN' || null);
  const SINGLE_LAYOUT = ['/login', '/signup', '/oauth2-login-success'];

  useEffect(() => {
    setIsMounted(true);

    const refreshTokenCheck = async () => {
      const data = {
        refreshToken,
      };
      try {
        await accountApis.authRefresh(data).then((res) => {
          if (res.data.status === 'SUCCESS') {
            instance.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.token}`;
            setAccessToken(res.data.data.token);
          }
        });
      } catch (err: any) {
        Toast.error(
          err.response.data.message ? err.response.data.message : '에러가 발생했습니다. 잠시 후 다시 시도해 주세요.'
        );
      }
    };
    if (refreshToken) {
      refreshTokenCheck();
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {!SINGLE_LAYOUT.includes(pathname) && <Header />}
      {!isPC && <MobileMenu />}
      <main>{children}</main>
    </>
  );
}
