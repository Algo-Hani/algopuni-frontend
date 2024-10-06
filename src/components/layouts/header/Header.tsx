import React from 'react';
import { AccountCircle, Login, Logo, Logout, Menu, Person } from '@/assets';
import { useResponsive } from '@/hooks/useResponsive';
import { usePathname, useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isMobileMenuOpenState } from '@/atoms/layout';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';
import Link from 'next/link';
import MenuBtn from './menuBtn/MenuBtn';
import { authAccessTokenState } from '@/atoms/auth';
import { accountApis } from '@/features/account/apis';
import instance from '@/apis/axios';
import { Toast } from '@/libs/ToastProvider';
import Cookies from 'universal-cookie';
import * as S from './Header.styled';

const Header = () => {
  const pathname = usePathname();
  const { isPC } = useResponsive();
  const cookies = new Cookies();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useRecoilState(isMobileMenuOpenState);
  const [accessToken, setAccessToken] = useRecoilState(authAccessTokenState);
  const { navbarVisible, isAtTop } = useHeaderScroll();

  const onClickLogout = () => {
    const logoutHandler = async () => {
      try {
        await accountApis.authLogout().then((res) => {
          if (res.data.status === 'SUCCESS') {
            setAccessToken(null);
            instance.defaults.headers.common['Authorization'] = '';
            cookies.remove('USER_REFRESH_TOKEN');
            Toast.success('로그아웃이 완료되었습니다.');
            router.push('/login');
          }
        });
      } catch (err: any) {
        Toast.error(
          err.response.data.message ? err.response.data.message : '에러가 발생했습니다. 잠시 후 다시 시도해 주세요.'
        );
      }
    };

    logoutHandler();
    setIsMobileMenuOpen(false);
  };

  return (
    <S.Header>
      <S.HeaderLayout $isVisible={navbarVisible} $isTop={isAtTop}>
        <div>
          <Link href={'/'}>
            <Logo width={isPC ? 140 : 120} height={isPC ? 60 : 52} />
          </Link>
          {isPC && (
            <>
              <S.Menu>
                <ul>
                  <S.MenuItem $isLocate={pathname.startsWith('/learn')}>
                    <Link href={'/learn'}>
                      <p>코딩테스트</p>
                    </Link>
                  </S.MenuItem>
                  <S.MenuItem $isLocate={pathname.startsWith('/career')}>
                    <Link href={'/career'}>
                      <p>채용</p>
                    </Link>
                  </S.MenuItem>
                  <S.MenuItem $isLocate={pathname.startsWith('/rank')}>
                    <Link href={'/rank'}>
                      <p>랭킹</p>
                    </Link>
                  </S.MenuItem>
                </ul>
              </S.Menu>
              <S.AuthMenu>
                {accessToken ? (
                  <>
                    <S.AuthBtn $color='#07A9AC' onClick={() => router.push('/signup')}>
                      <AccountCircle width={20} height={20} fill='#ffffff' /> 마이페이지
                    </S.AuthBtn>
                    <S.AuthBtn $color='#14142C' onClick={onClickLogout}>
                      <Logout width={20} height={20} fill='#ffffff' /> 로그아웃
                    </S.AuthBtn>
                  </>
                ) : (
                  <>
                    <S.AuthBtn $color='#14142C' onClick={() => router.push('/signup')}>
                      <Person width={20} height={20} fill='#ffffff' /> 회원가입
                    </S.AuthBtn>
                    <S.AuthBtn $color='#07A9AC' onClick={() => router.push('/login')}>
                      <Login width={20} height={20} fill='#ffffff' />
                      로그인
                    </S.AuthBtn>
                  </>
                )}
              </S.AuthMenu>
            </>
          )}
        </div>
        {!isPC && <MenuBtn isActive={isMobileMenuOpen} onClickToggle={() => setIsMobileMenuOpen((prev) => !prev)} />}
      </S.HeaderLayout>
    </S.Header>
  );
};

export default Header;
