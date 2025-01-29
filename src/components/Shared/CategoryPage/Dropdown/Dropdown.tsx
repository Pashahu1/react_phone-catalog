import React, { useEffect, useRef, useState } from 'react';
import './dropdown.scss';

type Props = {
  title: string;
  sortOptions: string[];
  currentOption: string;
  onOptionChange: (option: string) => void;
};

export const Dropdown: React.FC<Props> = ({
  title,
  sortOptions,
  currentOption,
  onOptionChange,
}) => {
  const [isActive, setActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    if (currentOption !== option) {
      onOptionChange(option);
    }

    setActive(false);
  };

  const toggleDropDown = () => {
    setActive(prev => !prev);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <span className="dropdown__title">{title}</span>
      <div className="dropdown__select" onClick={toggleDropDown}>
        <span>{currentOption}</span>
        <img src="./public/img/ArrowDown.svg" alt="arrowDown" />
      </div>
      {isActive && (
        <div className="dropdown__content">
          {sortOptions.map(option => (
            <span
              onClick={() => handleOptionClick(option)}
              key={option}
              className="dropdown__option"
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
