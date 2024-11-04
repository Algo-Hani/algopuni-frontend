'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import LevelBox from '@/components/levelBox/LevelBox';
import { Problems } from '../types';
import CustomPagination from '@/components/pagination/Pagination';
import { getPaginationData } from '@/utils/getPaginationData';
import * as S from './Learn.styled';
import { CustomScrollWrapper } from '@/components/styles/ListStyles';

const Learn = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? 1;

  const getProblemList = async (queryString: string) => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/problems?${queryString}`).then((res) => res.json());
  };

  const { isLoading, data, error } = useQuery({
    queryKey: ['problems', page],
    queryFn: () => getProblemList(`page=${page}`),
  });
  if (error) return 'An error has occurred';

  return (
    <S.PageContainer>
      <CustomScrollWrapper>
        <S.LearnCustomTable>
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
            {data?.data?.result?.map((el: Problems) => (
              <tr key={el.problemId}>
                <td>{el.problemId}</td>
                <td>{el.title}</td>
                <td>
                  <LevelBox level={el.level} />
                </td>
                <td>{el.successCount.toLocaleString()}</td>
                <td>{el.successRate}%</td>
              </tr>
            ))}
          </tbody>
        </S.LearnCustomTable>
      </CustomScrollWrapper>
      {data && <CustomPagination paginationData={getPaginationData(data.data)} />}
    </S.PageContainer>
  );
};

export default Learn;
