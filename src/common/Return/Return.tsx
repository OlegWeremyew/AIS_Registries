import React from 'react';

import { useNavigate } from 'react-router-dom';

import returnArrow from 'assets/images/common/arrow-left.svg';
import { PATH } from 'constants/router';
import { ReturnComponentType } from 'types';

import styles from './Return.module.scss';

export const Return = (): ReturnComponentType => {
  const navigate = useNavigate();

  const returnHandler = (): void => {
    navigate(PATH.START_PAGE);
  };

  return (
    <div onClick={returnHandler} className={styles.returnWrapper}>
      <img className={styles.return__img} src={returnArrow} alt="return arrow" />
      <p className={styles.return__text}>Главная</p>
    </div>
  );
};
