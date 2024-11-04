import { CustomTable } from '@/components/styles/ListStyles';
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px 20px 70px 20px;
  width: 100%;
  @media ${({ theme }) => theme.device.pc} {
    margin: 0px auto;
    padding: 30px 30px 70px 30px;
    max-width: 1280px;
  }
`;

export const LearnCustomTable = styled(CustomTable)`
  > thead > tr {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 1fr 1fr;
  }
  > tbody > tr {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 1fr 1fr;
  }
  @media ${({ theme }) => theme.device.pc} {
    > thead > tr {
      grid-template-columns: 1fr 5fr 2fr 1fr 1fr;
    }
    > tbody > tr {
      grid-template-columns: 1fr 5fr 2fr 1fr 1fr;
    }
  }
`;
