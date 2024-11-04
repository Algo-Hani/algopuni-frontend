import { IPagination } from '@/types/pagination';

export type Problems = {
  problemId: number;
  title: string;
  level: number;
  successCount: number;
  successRate: number;
  isFavorite: boolean;
};
export interface IProblemsList extends IPagination {
  result: Problems[];
}
