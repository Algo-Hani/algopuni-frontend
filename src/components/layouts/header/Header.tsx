import React from 'react';
import * as S from './Header.styled';
import { Logo } from '@/assets';
import { useResponsive } from '@/hooks/useResponsive';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { isSitemapOpenState } from '@/atoms/layout';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';

const Header = () => {
  const { isPC } = useResponsive();
  const router = useRouter();
  const setIsSitemapOpen = useSetRecoilState(isSitemapOpenState);
  const { navbarVisible, isAtTop } = useHeaderScroll();

  return (
    <header>
      <S.HeaderLayout $isVisible={navbarVisible} $isTop={isAtTop}>
        <div>
          <Logo width={isPC ? 140 : 120} height={isPC ? 60 : 52} />
          {isPC && (
            <S.Menu>
              <ul>
                <li>코딩테스트</li>
                <li>채용</li>
                <li>랭킹</li>
              </ul>
            </S.Menu>
          )}
          <S.AuthMenu></S.AuthMenu>
        </div>
      </S.HeaderLayout>
    </header>
  );
};

export default Header;
