import styled, { css } from 'styled-components';

export const HeaderLayout = styled.div<{
  $isVisible: boolean;
  $isTop: boolean;
}>`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  background-color: ${({ $isTop }) => ($isTop ? 'orange' : 'rgba(255, 255, 255, .5)')};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 10;

  ${({ $isVisible }) =>
    !$isVisible &&
    css`
      transform: translateY(-100%);
      opacity: 0;
    `}

  @media ${({ theme }) => theme.device.pc} {
    width: 100%;
    height: 80px;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      max-width: 1280px;
      background-color: yellow;
      > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 100px;
        height: 100%;
      }
    }
  }
`;

export const Menu = styled.div`
  width: fit-content;
  height: 100%;
  background-color: gray;
  > ul {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    column-gap: 20px;
    width: 100%;
    height: 100%;
    > li {
      width: 100%;
      height: 100%;
      background-color: red;
    }
  }
`;

export const AuthMenu = styled.div``;
