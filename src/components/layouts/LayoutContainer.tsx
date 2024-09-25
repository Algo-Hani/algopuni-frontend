'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from './header/Header';
import { usePathname } from 'next/navigation';

interface LayoutContentProps {
  children: ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const SINGLE_LAYOUT = ['/login', '/signup'];
  console.log(pathname);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {!SINGLE_LAYOUT.includes(pathname) && <Header />}
      <main>{children}</main>
    </>
  );
}
