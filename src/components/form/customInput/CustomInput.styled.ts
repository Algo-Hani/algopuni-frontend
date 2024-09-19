import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: fit-content;
`;
export const InputTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .custom_input_tag {
    display: flex;
    gap: 5px;
    ${({ theme }) => theme.font.medium_14};
    > span {
      color: ${({ theme }) => theme.color.primary};
    }
  }
  .custom_input_error {
    ${({ theme }) => theme.font.regular_12};
    color: ${({ theme }) => theme.color.error};
  }
  @media ${({ theme }) => theme.device.pc} {
    .custom_input_tag {
      ${({ theme }) => theme.font.medium_16};
    }
    .custom_input_error {
      ${({ theme }) => theme.font.regular_14};
    }
  }
`;

export const InputFuncWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.div`
  position: relative;
  width: 100%;
  > input {
    display: flex;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.outline};
    padding: 15px 10px;
    height: 48px;
    width: 100%;
    ${({ theme }) => theme.font.regular_14};
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
  .timer {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  @media ${({ theme }) => theme.device.pc} {
    > input {
      height: 52px;
      ${({ theme }) => theme.font.regular_14};
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  ${({ theme }) => theme.font.regular_10};
  color: ${({ theme }) => theme.color.hint};
  @media ${({ theme }) => theme.device.pc} {
    ${({ theme }) => theme.font.regular_12};
  }
`;
