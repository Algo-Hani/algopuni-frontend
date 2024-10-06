import { baseFilledButtonColor, filledButtonColor } from '@/styles/buttonStyle';
import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 420px;
  height: fit-content;
`;
export const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 5px;
  width: 100%;
  height: 48px;
  ${baseFilledButtonColor}
  ${({ theme }) => theme.font.bold_14};
  @media ${({ theme }) => theme.device.pc} {
    height: 52px;
  }
`;

export const LoginFuncWrapper = styled.div`
  width: 100%;
  max-width: 420px;
`;

export const SignUpBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 5px;
  width: 100%;
  height: 48px;
  ${filledButtonColor}
  ${({ theme }) => theme.font.bold_14};
  @media ${({ theme }) => theme.device.pc} {
    height: 52px;
  }
`;

export const FindFunc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  > button {
    ${({ theme }) => theme.font.regular_14};
  }
  > div {
    width: 1px;
    height: 12px;
    background-color: ${({ theme }) => theme.color.base};
  }
  @media ${({ theme }) => theme.device.pc} {
    margin-top: 30px;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 50px;
  > a > img {
    width: 52px;
    height: 52px;
  }
  @media ${({ theme }) => theme.device.pc} {
    gap: 10px;
    margin-top: 30px;
    > button > img {
      width: 64px;
      height: 64px;
    }
  }
`;
