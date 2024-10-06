import styled, { css } from 'styled-components';

export const Header = styled.header`
  width: 100%;
  z-index: 10;
`;
export const Menu = styled.div`
  width: fit-content;
  height: 100%;
  > ul {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    column-gap: 20px;
    padding: 10px 0px;
    width: 100%;
    height: 100%;
  }
`;
export const MenuItem = styled.li<{ $isLocate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ $isLocate, theme }) => ($isLocate ? theme.color.base : theme.color.hint)};
  ${({ theme }) => theme.font.medium_18};
  > p {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 80%;
  }
  &:hover {
    > p {
      color: ${({ theme }) => theme.color.base};
      border-bottom: 3px solid #a9a9a966;
    }
  }
`;

export const AuthMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
`;

export const AuthBtn = styled.button<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 20px;
  padding: 10px 20px;
  color: #ffffff;
  ${({ theme }) => theme.font.medium_14};
  background-color: ${({ $color }) => $color};
`;

export const HeaderLayout = styled.div<{
  $isVisible: boolean;
  $isTop: boolean;
}>`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  width: 100%;
  height: 52px;
  background-color: ${({ $isTop }) => ($isTop ? '#ffffff' : 'rgba(255, 255, 255, .5)')};
  z-index: 10;

  > button {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

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
    }
  }
`;
