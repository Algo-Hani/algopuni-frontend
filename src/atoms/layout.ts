import { atom } from 'recoil';
export const isSitemapOpenState = atom<boolean>({
  key: 'isSitemapOpen',
  default: false,
});
export const activeMobileSitemapState = atom<null | string>({
  key: 'activeMobileSitemap',
  default: null,
});
