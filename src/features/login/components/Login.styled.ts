import { baseFilledButtonColor, filledButtonColor } from '@/styles/buttonStyle';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  .login_header {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 30px;
    width: 100%;
    height: fit-content;
    color: white;
    background-color: ${({ theme }) => theme.color.base};
    > button {
      position: absolute;
      top: 15px;
      left: 20px;
    }
    > svg {
      margin: 20px 0px;
    }
  }
  .login_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: white;
    > h1 {
      margin-bottom: 50px;
      ${({ theme }) => theme.font.bold_28};
    }
  }

  @media ${({ theme }) => theme.device.pc} {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    .login_header {
      position: sticky;
      top: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 50px;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      > h1 {
        ${({ theme }) => theme.font.bold_28};
      }
      > svg {
        margin: 0px;
      }
    }
    .login_body {
      display: flex;
      flex-direction: column;
      padding: 150px 30px;
      width: 100%;
      height: 100%;
    }
  }
`;

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
  > button > img {
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
