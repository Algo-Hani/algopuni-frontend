'use client';

import React from 'react';
import { CustomTable } from '@/components/styles/ListStyles';
import * as S from './Learn.styled';
import { config } from 'process';

const Learn = () => {
  // async function getUsers() {
  //   return (await fetch(`${config().baseUrl}/users`).then((res) => res.json())) as User[];
  // }

  return (
    <S.PageContainer>
      <CustomTable>
        <thead>
          <tr>
            <th>문제</th>
            <th>제목</th>
            <th>난이도</th>
            <th>완료한 사람</th>
            <th>정답률</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>199</td>
            <td>test 문제입니다</td>
            <td>LEVEL 0</td>
            <td>235,623</td>
            <td>99%</td>
          </tr>
        </tbody>
      </CustomTable>
    </S.PageContainer>
  );
};

export default Learn;
