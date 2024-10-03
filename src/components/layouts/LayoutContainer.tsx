'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from './header/Header';
import { usePathname } from 'next/navigation';
import MobileMenu from './header/mobileMenu/MobileMenu';
import { useResponsive } from '@/hooks/useResponsive';
import Cookies from 'universal-cookie';
import { accountApis } from '@/features/account/apis';
import { Toast } from '@/libs/ToastProvider';

interface LayoutContentProps {
  children: ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const [isMounted, setIsMounted] = useState(false);
  const cookies = new Cookies();
  const pathname = usePathname();
  const SINGLE_LAYOUT = ['/login', '/signup'];
  const { isPC } = useResponsive();

  useEffect(() => {
    const refreshTokenCheck = async () => {
      const isRefreshToke = cookies.get('USER_REFRESH_TOKEN' ?? null);
      console.log(isRefreshToke);
      if (isRefreshToke) {
        try {
          await accountApis.authRefresh().then((res) => {
            if (res.data.status === 'SUCCESS') {
              console.log(res.data.data.accessToken);
              //  instance.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.accessToken}`;
              //  setAccessToken(res.data.data.accessToken);
              //  Toast.success('로그인이 완료되었습니다.');
              //  router.push('/');
            }
          });
        } catch (err: any) {
          Toast.error(
            err.response.data.message ? err.response.data.message : '에러가 발생했습니다. 잠시 후 다시 시도해 주세요.'
          );
        }
      } else {
        console.log('none-refreshToken');
      }
    };
    refreshTokenCheck();
  }, []);

  useEffect(() => {
    setIsMounted(true);
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
