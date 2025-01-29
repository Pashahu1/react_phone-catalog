import React, { useState } from 'react';
import './paginationCntrols.scss';

type Props = {
  title: string;
  sortOptions: string[];
  onSortChange: (sortKey: string) => void;
};

export const usePaginationControls: React.FC<Props> = ({
  title,
  sortOptions,
  onSortChange,
}) => {
  const [sortValue, setSortValue] = useState<string>(sortOptions[0]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setSortValue(selectedValue);

    onSortChange(selectedValue);
  };

  return (
    <div className="pagination-controls">
      <span className="pagination-controls__title">{title}</span>
      <select
        className="pagination-controls__select"
        name="sort"
        id="sort"
        value={sortValue}
        onChange={handleSortChange}
      >
        {sortOptions.map(option => (
          <option
            key={option}
            value={option}
            className="pagination-controls__option"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
