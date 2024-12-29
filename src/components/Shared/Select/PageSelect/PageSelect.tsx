import React from 'react';
import './pageSelect.scss';

type Props = {
  pageSize: number;
  setSize: (pageSize: number) => void;
};

export const PageSelect: React.FC<Props> = ({ pageSize, setSize }) => {
  return (
    <div className="page-select">
      <label className="page-select__label" htmlFor="perPageSelector">
        Items on page
      </label>
      <select
        className="page-select__select"
        data-cy="perPageSelector"
        id="perPageSelector"
        onChange={e => setSize(Number(e.target.value))}
        value={pageSize}
      >
        {[4, 8, 16].map(size => (
          <option key={size} value={size} className="page-select__option">
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};
