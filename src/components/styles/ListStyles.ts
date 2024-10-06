import styled from 'styled-components';

export const CustomTable = styled.table`
  width: 100%;

  > thead {
  }
  @media ${({ theme }) => theme.device.pc} {
    display: flex;
    flex-direction: column;
    > thead {
      width: 100%;
      height: 52px;
      background-color: ${({ theme }) => theme.color.outline};
      ${({ theme }) => theme.font.regular_16};
      color: ${({ theme }) => theme.color.hint};
      > tr {
        display: flex;
        height: 100%;
        > th {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
      }
    }
    > tbody {
      width: 100%;
      height: 34px;
      ${({ theme }) => theme.font.medium_16};
      > tr {
        display: flex;
        > td {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
