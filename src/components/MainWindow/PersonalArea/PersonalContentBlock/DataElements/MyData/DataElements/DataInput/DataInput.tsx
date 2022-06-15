import React, { FC, useState } from 'react';

import { ReturnComponentType } from '../../../../../../../../types';

import styles from './DataInput.module.scss';
import { DataInputPropsType } from './types';

export const DataInput: FC<DataInputPropsType> = ({
  value,
  label,
  id,
}): ReturnComponentType => {
  const [status, setStatus] = useState<boolean>(false);

  const labelStyle = status ? styles.active : styles.dataInput__label;

  return (
    <div className={styles.dataInputWrapper}>
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.dataInput__input}
        onClick={() => setStatus(true)}
        onBlur={() => setStatus(false)}
        autoFocus
        id={id}
        type="text"
        defaultValue={value}
        placeholder={label}
      />
    </div>
  );
};
