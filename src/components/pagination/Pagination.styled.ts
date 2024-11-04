import { grayButtonColor } from '@/styles/buttonStyle';
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 90%;
    width: 30px;
    height: 30px;
    color: #a9a9a9;
    border: 1px solid ${({ theme }) => theme.color.outline};
    &:disabled {
      ${grayButtonColor}
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    width: fit-content;
  }
  @media ${({ theme }) => theme.device.pc} {
    gap: 15px;
    > button {
      width: 48px;
      height: 48px;
    }
    > div {
      gap: 15px;
    }
  }
`;
export const PaginationBtn = styled.button<{ $locate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90%;
  width: 30px;
  height: 30px;
  border: 1px solid ${({ $locate, theme }) => ($locate ? theme.color.primary_container : theme.color.outline)};
  color: ${({ $locate, theme }) => ($locate ? theme.color.primary : theme.color.hint)};
  background-color: ${({ $locate, theme }) => ($locate ? theme.color.primary_container : '')};
  ${({ theme }) => theme.font.Regular_14};
  :hover {
    color: #583eee;
    background-color: #f3f1ff;
  }
  @media ${({ theme }) => theme.device.pc} {
    width: 48px;
    height: 48px;

    ${({ theme }) => theme.font.Regular_20};
  }
`;
