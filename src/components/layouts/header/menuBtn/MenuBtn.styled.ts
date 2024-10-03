import styled from 'styled-components';

export const HamburgerBtn = styled.button<{ $isActive: boolean }>`
  width: 28px;
  height: 28px;
  cursor: pointer;
  > div {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    align-items: center;
  }
  .bar {
    width: 100%;
    height: 3px;
    background-color: #14142c;
    transition: transform 0.3s ease, opacity 0.3s ease;
    border-radius: 2px;
  }

  .top {
    transform: ${({ $isActive }) => ($isActive ? 'translateY(8px) rotate(45deg)' : 'translateY(0) rotate(0)')};
  }

  .middle {
    opacity: ${({ $isActive }) => ($isActive ? 0 : 1)};
  }

  .bottom {
    transform: ${({ $isActive }) => ($isActive ? 'translateY(-8px) rotate(-45deg)' : 'translateY(0) rotate(0)')};
  }
`;
