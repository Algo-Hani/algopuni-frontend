import { css } from 'styled-components';

/*  ---------- color --------------- */

// 흰 - 남 - 검
export const baseLineButtonColor = css`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.base};
  color: ${({ theme }) => theme.color.text};
`;

// 남 - 남 - 흰
export const baseFilledButtonColor = css`
  background-color: ${({ theme }) => theme.color.base};
  border: 1px solid ${({ theme }) => theme.color.base};
  color: ${({ theme }) => theme.color.white};
`;

// 흰 - 주 - 검
export const colorLineButtonColor = css`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.text};
`;

// 주 - 주 - 흰
export const filledButtonColor = css`
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`;

// 흰 - 회 - 검
export const grayLineButtonColor = css`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.outline};
  color: ${({ theme }) => theme.color.text};
`;
// 회 - 회 - 검
export const grayButtonColor = css`
  background-color: ${({ theme }) => theme.color.outline};
  border: 1px solid ${({ theme }) => theme.color.outline};
  color: ${({ theme }) => theme.color.text};
`;
