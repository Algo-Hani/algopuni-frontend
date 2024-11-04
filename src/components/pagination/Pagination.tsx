import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@/assets';
import { useResponsive } from '@/hooks/useResponsive';
import { nanoid } from 'nanoid';
import { IPagination } from '@/types/pagination';
import { useRouter } from 'next/navigation';
import * as S from './Pagination.styled';

type Props = {
  paginationData: IPagination;
};

const CustomPagination = ({ paginationData }: Props) => {
  const router = useRouter();
  const { isPC } = useResponsive();

  const onClickFirstPage = () => {
    const firstPage = 1;
    router.push(`?page=${firstPage}`);
  };
  const onClickLastPage = () => {
    const lastPage = paginationData.totalPages;
    router.push(`?page=${lastPage}`);
  };

  const onClickPrevPage = () => {
    const prevPage = paginationData.page - 1;
    router.push(`?page=${prevPage}`);
  };

  const onClickNextPage = () => {
    const prevPage = paginationData.page + 1;
    router.push(`?page=${prevPage}`);
  };

  const onClickPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.id;
    router.push(`?page=${page}`);
  };

  const getStartPage = () => {
    const start = Math.floor(paginationData.page / 5) * 5;
    if (start === 0) {
      return 1;
    } else {
      return start;
    }
  };

  const startPage = getStartPage();

  return (
    <S.PaginationWrapper>
      {paginationData.page !== 1 && (
        <button onClick={onClickFirstPage}>
          <KeyboardDoubleArrowLeft width={isPC ? 24 : 16} height={isPC ? 24 : 16} fill='#A9A9A9' />
        </button>
      )}

      <button onClick={onClickPrevPage} disabled={paginationData.page === 1}>
        <KeyboardArrowLeft width={isPC ? 24 : 16} height={isPC ? 24 : 16} fill='#A9A9A9' />
      </button>

      <div>
        {new Array(5).fill(1).map((_, index) => {
          return (
            index + startPage <= paginationData.totalPages && (
              <S.PaginationBtn
                key={nanoid()}
                id={String(index + startPage)}
                $locate={paginationData.page == index + startPage}
                onClick={onClickPage}
              >
                {index + startPage}
              </S.PaginationBtn>
            )
          );
        })}
      </div>
      <button onClick={onClickNextPage} disabled={paginationData.page === paginationData.totalPages}>
        <KeyboardArrowRight width={isPC ? 24 : 16} height={isPC ? 24 : 16} fill='#A9A9A9' />
      </button>
      {paginationData.page !== paginationData.totalPages && (
        <button onClick={onClickLastPage}>
          <KeyboardDoubleArrowRight width={isPC ? 24 : 16} height={isPC ? 24 : 16} fill='#A9A9A9' />
        </button>
      )}
    </S.PaginationWrapper>
  );
};

export default CustomPagination;
