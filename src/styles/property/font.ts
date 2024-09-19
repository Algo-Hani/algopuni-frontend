import { css } from 'styled-components';

export const font = {
  bold_28: () => css`
    font-weight: 700;
    font-size: 2.8rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
  `,
  bold_24: () => css`
    font-weight: 700;
    font-size: 2.4rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
  `,
  bold_20: () => css`
    font-weight: 700;
    font-size: 2rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
  `,
  bold_18: () => css`
    font-weight: 700;
    font-size: 1.8rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
  `,
  bold_14: () => css`
    font-weight: 700;
    font-size: 1.4rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
  `,
  bold_10: () => css`
    font-weight: 700;
    font-size: 1rem;
    line-height: normal;
    font-family: var(--font-spoqa-bold);
  `,

  medium_16: () => css`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: normal;
    font-family: var(--font-spoqa-medium);
  `,
  medium_14: () => css`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: normal;
    font-family: var(--font-spoqa-medium);
  `,
  medium_12: () => css`
    font-weight: 500;
    font-size: 1.2rem;
    line-height: normal;
    font-family: var(--font-spoqa-medium);
  `,
  regular_16: () => css`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: normal;
    font-family: var(--font-spoqa-regular);
  `,
  regular_14: () => css`
    font-weight: 400;
    font-size: 1.4rem;
    line-height: normal;
    font-family: var(--font-spoqa-regular);
  `,
  regular_12: () => css`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: normal;
    font-family: var(--font-spoqa-regular);
  `,
  regular_10: () => css`
    font-weight: 400;
    font-size: 1rem;
    line-height: normal;
    font-family: var(--font-spoqa-regular);
  `,
};
export type FontType = typeof font;
