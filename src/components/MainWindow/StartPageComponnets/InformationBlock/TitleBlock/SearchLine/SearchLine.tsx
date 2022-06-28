import React, { useState } from 'react';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import { RegisteredAction } from 'reduxStore/registeredRudecer';
import { ReturnComponentType } from 'types';

import styles from './SearchLine.module.scss';

export const SearchLine = (): ReturnComponentType => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();
  const changeSearchValue = (search: string): void => {
    if (search.trim()) {
      setSearch(search);
    }
  };

  const setSearchValue = (): void => {
    dispatch(RegisteredAction.setRegistrationSearch(search.toLowerCase()));
    setSearch('');
  };

  const setSearchValueKeyPress = (key: string): void => {
    if (key === 'Enter') {
      dispatch(RegisteredAction.setRegistrationSearch(search.toLowerCase()));
      setSearch('');
    }
  };

  return (
    <div className={styles.searchLineWrapper}>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="searchRegistry">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <input
          onKeyPress={e => setSearchValueKeyPress(e.key)}
          onChange={e => changeSearchValue(e.currentTarget.value)}
          id="searchRegistry"
          className={styles.search}
          type="text"
          placeholder="Искать реестр..."
          value={search}
        />
      </div>
      <button
        onClick={setSearchValue}
        className={styles.searchLine__button}
        type="button"
      >
        Искать
      </button>
    </div>
  );
};
