import styled from 'styled-components';

export const CustomScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const CustomTable = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 800px;
  > thead {
    width: 100%;
    height: 32px;
    background-color: ${({ theme }) => theme.color.outline};
    ${({ theme }) => theme.font.medium_12};
    color: ${({ theme }) => theme.color.hint};
    > tr {
      display: flex;
      height: 100%;
      > th {
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 3px solid ${({ theme }) => theme.color.outline};
        width: 100%;
        height: 100%;
      }
    }
  }
  > tbody {
    width: 100%;
    ${({ theme }) => theme.font.medium_12};
    > tr {
      display: flex;
      margin-bottom: 5px;
      border-left: 3px solid #ffffff;
      height: 32px;
      cursor: pointer;

      > td {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }
  @media ${({ theme }) => theme.device.pc} {
    > thead {
      height: 52px;
      ${({ theme }) => theme.font.medium_16};
    }
    > tbody {
      ${({ theme }) => theme.font.medium_16};
      > tr {
        &:hover {
          background-color: ${({ theme }) => theme.color.info};
          border-left: 3px solid ${({ theme }) => theme.color.primary};
        }
      }
    }
  }
`;
