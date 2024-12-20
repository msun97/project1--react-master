import React, { useState, useEffect } from 'react';
import styles from '../style/Search.module.scss';
import classNames from 'classnames';
import { FaTimes } from "react-icons/fa";

const Search = ({ isActive, onClose }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClose = () => {
    setSearchValue('');
    if (onClose) onClose();
  };

  // Handle `esc` key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={classNames(styles.searchTab, {
      [styles.active]: isActive,
    })}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <input
            type="text"
            name="search"
            id={styles.search}
            value={searchValue}
            onChange={handleSearchChange}
            placeholder='Search'
            aria-label='Search'
          />
        </div>
        <div className={styles.descripte}>
          Hit enter to search or ESC to close
          <div
            className={styles.close}
            onClick={handleClose}
            role='button'
            tabIndex={0}
            aria-label='Close Search'
          >
            <FaTimes />
              </div>
            </div>

        </div>
    </div>
  )
}

export default Search