export const getPaginationData = (data: any) => {
  const { page, size, totalElements, totalPages } = data;
  return { page, size, totalElements, totalPages };
};
