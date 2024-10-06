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
      try {
        await accountApis.authRefresh().then((res) => {
          if (res.data.status === 'SUCCESS') {
            console.log(res.data.data.accessToken);
          }
        });
      } catch (err: any) {
        Toast.error(
          err.response.data.message ? err.response.data.message : '에러가 발생했습니다. 잠시 후 다시 시도해 주세요.'
        );
      }
    };
    if (cookies.get('USER_REFRESH_TOKEN')) {
      refreshTokenCheck();
    }
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
