import './optionSelector.scss';
import React, { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
};

export const OptionSelector: React.FC<Props> = ({ label, children }) => {
  return (
    <div className="media-details__section">
      <label className="media-details__label">{label}</label>
      <div className="media-details__options">{children}</div>
    </div>
  );
};
