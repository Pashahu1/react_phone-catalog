import React from 'react';

type Props = {
  pageSize: number;
  setSize: (pageSize: number) => void;
};

export const Select: React.FC<Props> = ({ pageSize, setSize }) => {
  return (
    <div>
      <span>Items on page</span>
      <select
        className="form-control"
        data-cy="perPageSelector"
        id="perPageSelector"
        onChange={e => setSize(Number(e.target.value))}
        value={pageSize}
      >
        {[3, 5, 10, 20].map(size => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};
