import { css } from 'styled-components';

export const font = {
  title_lg: () => css`
    font-weight: 700;
    font-size: 2.8rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
    @media ${({ theme }) => theme.device.pc} {
      font-size: 2rem;
    }
  `,
  title_md: () => css`
    font-weight: 700;
    font-size: 2.4rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
    @media ${({ theme }) => theme.device.pc} {
      font-size: 1.8rem;
    }
  `,
  title_sm: () => css`
    font-weight: 700;
    font-size: 1.8rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
    @media ${({ theme }) => theme.device.pc} {
      font-size: 1.6rem;
    }
  `,
  title_xs: () => css`
    font-weight: 700;
    font-size: 1.4rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
  `,
  sub_md: () => css`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: normal;
    font-family: var(--font-spoqa-medium);
  `,
  sub_sm: () => css`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: normal;
    font-family: var(--font-spoqa-medium);
  `,
  text_md: () => css`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: normal;
    font-family: var(--font-spoqa-regular);
  `,
  text_sm: () => css`
    font-weight: 400;
    font-size: 1.4rem;
    line-height: normal;
    font-family: var(--font-spoqa-regular);
  `,
  caption: () => css`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: normal;
    font-family: var(--font-spoqa-regular);
  `,
};
export type FontType = typeof font;
