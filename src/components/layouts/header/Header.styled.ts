import styled from 'styled-components';

export const HeaderLayout = styled.header`
  width: 100%;
  height: 52px;
  @media ${({ theme }) => theme.device.pc} {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      width: 100%;
      max-width: 1280px;
      background-color: yellow;
    }
  }
`;
