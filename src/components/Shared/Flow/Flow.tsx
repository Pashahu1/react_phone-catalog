import home from '../../../../public/img/Home.svg';
import arrowRight from '../../../../public/img/ArrowRight.svg';
import React from 'react';
import './flow.scss';

type Props = {
  title: string;
};

export const Flow: React.FC<Props> = ({ title }) => {
  return (
    <div className="flow">
      <div className="flow__content">
        <img src={home} alt="home" />
        <img src={arrowRight} alt="arrowRight" />
        {title}
      </div>
    </div>
  );
};
