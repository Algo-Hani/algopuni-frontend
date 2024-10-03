import React, { useEffect, useRef, useState } from 'react';
import { isMobileMenuOpenState } from '@/atoms/layout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Link from 'next/link';
import { Logout } from '@/assets';
import { accountApis } from '@/features/account/apis';
import { useRouter } from 'next/navigation';
import * as S from './MobileMenu.styled';
import { authAccessTokenState } from '@/atoms/auth';
import { Toast } from '@/libs/ToastProvider';

const MobileMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const setAccessToken = useSetRecoilState(authAccessTokenState);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useRecoilState(isMobileMenuOpenState);
  const router = useRouter();

  const onClickLogout = () => {
    const logoutHandler = async () => {
      try {
        await accountApis.authLogout().then((res) => {
          if (res.data.status === 'SUCCESS') {
            setAccessToken(null);
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
  };

  useEffect(() => {
    if (menuRef.current) {
      setHeight(menuRef.current.scrollHeight);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <S.MobileMenu $isActive={isMobileMenuOpen} $height={height}>
        <div className='mobile_menu_content' ref={menuRef}>
          <S.MenuList>
            <S.MenuItem>
              <Link href={'/learn'} onClick={() => setIsMobileMenuOpen(false)}>
                <p>코딩테스트</p>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href={'/career'} onClick={() => setIsMobileMenuOpen(false)}>
                <p>채용</p>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href={'/rank'} onClick={() => setIsMobileMenuOpen(false)}>
                <p>랭킹</p>
              </Link>
            </S.MenuItem>
          </S.MenuList>
          <S.AuthMenuList>
            <S.MenuItem>
              <Link href={'/login'} onClick={() => setIsMobileMenuOpen(false)}>
                <p>로그인</p>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href={'/signup'} onClick={() => setIsMobileMenuOpen(false)}>
                <p>회원가입</p>
              </Link>
            </S.MenuItem>
          </S.AuthMenuList>
          <S.SubMenu>
            <S.AuthBtn $color='#14142C' onClick={onClickLogout}>
              <Logout width={18} height={18} fill='#ffffff' />
              로그아웃
            </S.AuthBtn>
          </S.SubMenu>
        </div>
      </S.MobileMenu>
      {isMobileMenuOpen && <S.BackDrop />}
    </>
  );
};

export default MobileMenu;
