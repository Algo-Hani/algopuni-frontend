import { atom } from 'recoil';

export const authAccessTokenState = atom<string | null>({
  key: 'authAccessToken',
  default: null,
});
