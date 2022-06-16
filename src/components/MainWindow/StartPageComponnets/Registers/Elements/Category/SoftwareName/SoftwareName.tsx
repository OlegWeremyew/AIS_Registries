import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import doubleArrow from '../../../../../../../assets/images/startPageComponnets/registers/elements/doubleArrow.svg';
import { RegisteredAction } from '../../../../../../../reduxStore/registeredRudecer';
import { ReturnComponentType } from '../../../../../../../types';

import styles from './SoftwareName.module.scss';
import { sortStatusType } from './types';

export const SoftwareName = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const [sortStatus, setConstStatus] = useState<sortStatusType>('no sort');

  const changeSort = (): void => {
    if (sortStatus === 'no sort') {
      setConstStatus('up sort');
      dispatch(RegisteredAction.changeSortByRegistrationNamesSoftware(sortStatus));
    }
    if (sortStatus === 'up sort') {
      setConstStatus('down sort');
      dispatch(RegisteredAction.changeSortByRegistrationNamesSoftware(sortStatus));
    }
    setConstStatus('up sort');
    dispatch(RegisteredAction.changeSortByRegistrationNamesSoftware(sortStatus));
  };

  return (
    <div onClick={changeSort} className={styles.softwareWrapper}>
      <img className={styles.software__img} src={doubleArrow} alt="double arrow" />
      <p className={styles.software__text}>Наименование программного обеспечения</p>
    </div>
  );
};
