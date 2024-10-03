import React from 'react';
import { Login, Logo, Menu, Person } from '@/assets';
import { useResponsive } from '@/hooks/useResponsive';
import { usePathname, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { isMobileMenuOpenState } from '@/atoms/layout';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';
import Link from 'next/link';
import MenuBtn from './menuBtn/MenuBtn';
import * as S from './Header.styled';

const Header = () => {
  const pathname = usePathname();
  const { isPC } = useResponsive();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useRecoilState(isMobileMenuOpenState);
  const { navbarVisible, isAtTop } = useHeaderScroll();

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
                <S.AuthBtn $color='#14142C' onClick={() => router.push('/signup')}>
                  <Person width={20} height={20} fill='#ffffff' /> 회원가입
                </S.AuthBtn>
                <S.AuthBtn $color='#07A9AC' onClick={() => router.push('/login')}>
                  <Login width={20} height={20} fill='#ffffff' />
                  로그인
                </S.AuthBtn>
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
