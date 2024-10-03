import { atom } from 'recoil';
export const isMobileMenuOpenState = atom<boolean>({
  key: 'isMobileMenuOpen',
  default: false,
});
export const activeMobileSitemapState = atom<null | string>({
  key: 'activeMobileSitemap',
  default: null,
});
