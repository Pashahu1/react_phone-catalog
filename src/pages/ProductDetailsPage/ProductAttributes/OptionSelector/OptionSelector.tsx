import './optionSelector.scss';
import React, { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
  indicator?: string;
};

export const OptionSelector: React.FC<Props> = ({
  label,
  children,
  indicator,
}) => {
  return (
    <div className="media-details__section">
      <div className="media-details__header">
        <label className="media-details__label">{label}</label>
        {indicator && (
          <span className="media-details__indicator">{indicator}</span>
        )}
      </div>
      <div className="media-details__options">{children}</div>
    </div>
  );
};
