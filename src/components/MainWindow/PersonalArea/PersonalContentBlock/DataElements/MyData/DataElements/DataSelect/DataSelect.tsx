import React, { FC, useState } from 'react';

import arrow from 'assets/images/header/arrowDown.svg';
import { ReturnComponentType } from 'types';

import styles from './DataSelect.module.scss';
import { DataSelectPropsType } from './types';

export const DataSelect: FC<DataSelectPropsType> = ({
  id,
  label,
  name,
  list,
}): ReturnComponentType => {
  const [status, setStatus] = useState<boolean>(false);

  const labelStyle = status ? styles.active : styles.dataInput__label;

  const mappedOptions: any[] = list
    ? list.map((o, i) => (
        <option key={i} value={o} className={styles.dataInput__select__option}>
          {o}
        </option>
      ))
    : [];

  return (
    <div className={styles.selectWrapper}>
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
      <div className={styles.select__block}>
        <img className={styles.select__label} src={arrow} alt="arrow" />
        <select
          onClick={() => setStatus(true)}
          onBlur={() => setStatus(false)}
          className={styles.dataInput__select}
          name={name}
          id={id}
        >
          {mappedOptions}
        </select>
      </div>
    </div>
  );
};
