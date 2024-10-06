import styled from 'styled-components';

export const PageContainer = styled.div`
  margin-top: 54px;
  padding: 50px 20px;
  width: 100%;
  @media ${({ theme }) => theme.device.pc} {
    margin: 0px auto;
    padding: 50px 30px 70px 30px;
    max-width: 1280px;
  }
`;
