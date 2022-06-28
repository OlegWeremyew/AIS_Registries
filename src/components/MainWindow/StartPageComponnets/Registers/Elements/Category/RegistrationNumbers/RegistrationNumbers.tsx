import React from 'react';

import { useDispatch } from 'react-redux';

import doubleArrow from 'assets/images/startPageComponnets/registers/elements/doubleArrow.svg';
import { RegisteredAction } from 'reduxStore/registeredRudecer';
import { ReturnComponentType } from 'types';

import styles from './RegistrationNumbers.module.scss';

export const RegistrationNumbers = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const changeSort = (): void => {
    dispatch(RegisteredAction.changeSortByRegistrationNumbers());
  };

  return (
    <div onClick={changeSort} className={styles.registrationWrapper}>
      <img className={styles.registration__img} src={doubleArrow} alt="double arrow" />
      <p className={styles.registration__text}>Регистрационный номер</p>
    </div>
  );
};
