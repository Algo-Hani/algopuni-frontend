import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: fit-content;
  > p {
    display: flex;
    gap: 5px;
    ${({ theme }) => theme.font.medium_14};
    > span {
      color: ${({ theme }) => theme.color.primary};
    }
  }
  @media ${({ theme }) => theme.device.pc} {
    > p {
      ${({ theme }) => theme.font.medium_16};
    }
  }
`;

export const Input = styled.div`
  position: relative;
  > input {
    display: flex;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.outline};
    padding: 15px 10px;
    height: 48px;
    width: 100%;
    ${({ theme }) => theme.font.text_16};
    outline: none;
    &::placeholder {
      color: ${({ theme }) => theme.color.placeholder};
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.color.primary};
    }
  }
  > button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  @media ${({ theme }) => theme.device.pc} {
    > input {
      height: 52px;
      ${({ theme }) => theme.font.text_16};
    }
  }
`;
