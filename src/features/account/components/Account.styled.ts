import styled from 'styled-components';

export const AccountContainer = styled.div`
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
