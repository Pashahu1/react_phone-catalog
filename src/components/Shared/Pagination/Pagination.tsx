import React from 'react';
import { Link } from 'react-router-dom';

interface PaginationProps {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  setPageSize: (size: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
  setPageSize,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <select
          className="form-control"
          data-cy="perPageSelector"
          id="perPageSelector"
          onChange={e => setPageSize(Number(e.target.value))}
          value={perPage}
        >
          {[3, 5, 10, 20].map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        {pageNumbers.map(number => (
          <li
            className={`page-item ${currentPage === number ? 'active' : ''}`}
            key={number}
          >
            <Link
              to={`?page=${number}&perPage=${perPage}`}
              className="page-link"
              onClick={() => onPageChange(number)}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
