import React, { FC, useState } from 'react';

import { ReturnComponentType } from '../../../../types';

import styles from './Input.module.scss';
import { InputType } from './types';

export const Input: FC<InputType> = ({
  type,
  placeholder,
  id,
  text,
}): ReturnComponentType => {
  const [status, setStatus] = useState<boolean>(false);

  const labelStyle = status ? styles.active : styles.input__label;

  return (
    <div className={styles.inputWrapper}>
      <label className={labelStyle} htmlFor={id}>
        {text}
      </label>
      <input
        onClick={() => setStatus(true)}
        onBlur={() => setStatus(false)}
        className={styles.input__input}
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};
