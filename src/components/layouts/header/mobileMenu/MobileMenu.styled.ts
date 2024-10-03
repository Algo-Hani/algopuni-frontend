import styled from 'styled-components';

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100vw;
  height: 100%;
  background: #00000080;
  z-index: 3;
`;
export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 20px 20px 20px;
  width: 100%;
`;

export const AuthBtn = styled.button<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 20px;
  padding: 6px 10px;
  color: #ffffff;
  ${({ theme }) => theme.font.medium_12};
  background-color: ${({ $color }) => $color};
`;
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: fit-content;
  padding: 74px 20px 20px 20px;
`;

export const AuthMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: fit-content;
  padding: 20px 20px 20px 20px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.base};
  ${({ theme }) => theme.font.medium_16};
  > p {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 80%;
  }
`;

export const MobileMenu = styled.div<{
  $isActive: boolean;
  $height: number;
}>`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  background-color: white;
  z-index: 5;
  .mobile_menu_content {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    height: ${({ $isActive, $height }) => ($isActive ? `${$height}px` : '0px')};
    transition: ${({ $isActive }) => ($isActive ? 'height 0.4s ease-in-out' : 'none')};
    overflow: hidden;
  }
`;
