import { useEffect, useState } from 'react';

interface PaginationResult<T> {
  currentItems: T[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  setPageSize: (newPage: number) => void;
  paginate: (pageNumber: number) => void;
}

function usePagination<T>(
  items: T[],
  itemsPerPage: number,
): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSizeState] = useState<number>(itemsPerPage);

  useEffect(() => {
    setPageSizeState(itemsPerPage);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(items.length / pageSize);
  const firstPageIndex = (currentPage - 1) * pageSize;
  const currentItems = items.slice(firstPageIndex, firstPageIndex + pageSize);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    pageSize,
    setPageSize: setPageSizeState,
    paginate,
  };
}

export default usePagination;
