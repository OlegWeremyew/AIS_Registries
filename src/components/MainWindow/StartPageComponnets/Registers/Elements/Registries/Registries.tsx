import React from 'react';

import { useSelector } from 'react-redux';

import { getRegisteredList } from '../../../../../../selectors';
import { ReturnComponentType } from '../../../../../../types';

import styles from './Registries.module.scss';
import { Registry } from './Registry';

export const Registries = (): ReturnComponentType => {
  const registeredList = useSelector(getRegisteredList);

  return (
    <div className={styles.registriesWrapper}>
      {registeredList.map(registry => (
        <Registry key={registry.registrationNumbers} registry={registry} />
      ))}
    </div>
  );
};
