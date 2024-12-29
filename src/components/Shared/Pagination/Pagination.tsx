import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.scss';

interface PaginationProps {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(total / perPage);

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className={`slider__button ${currentPage === 1 ? 'swiper-button-disabled' : ''}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <ul className="pagination__list">
        {pageNumbers.map(number => (
          <li
            className={`page-item ${currentPage === number ? 'active' : ''}`}
            key={number}
          >
            <Link
              data-cy="pageLink"
              to={`?page=${number}&perPage=${perPage}`}
              className="page-link"
              onClick={() => onPageChange(number)}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
      <button className="slider__button" onClick={handleNextPage}>
        &gt;
      </button>
    </div>
  );
};
