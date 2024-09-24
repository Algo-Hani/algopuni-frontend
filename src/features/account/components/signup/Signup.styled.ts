import { disableButtonColor, filledButtonColor, grayLineButtonColor } from '@/styles/buttonStyle';
import styled from 'styled-components';

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 420px;
  height: fit-content;
`;

export const SignupBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 5px;
  width: 100%;
  height: 48px;
  ${filledButtonColor}
  ${({ theme }) => theme.font.bold_14};
  @media ${({ theme }) => theme.device.pc} {
    height: 52px;
  }
`;

export const FuncBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0px 15px;
  width: fit-content;
  min-width: 47px;
  height: 48px;
  white-space: nowrap;
  ${grayLineButtonColor}
  ${({ theme }) => theme.font.medium_12};
  @media ${({ theme }) => theme.device.pc} {
    height: 52px;
  }
  &:disabled {
    ${disableButtonColor}
  }
`;
export const EmailResend = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  ${({ theme }) => theme.font.regular_10};
  > div {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.color.hint};
  }
  > button {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.primary};
    &:disabled {
      color: ${({ theme }) => theme.color.hint};
    }
  }
  @media ${({ theme }) => theme.device.pc} {
    ${({ theme }) => theme.font.regular_12};
  }
`;
