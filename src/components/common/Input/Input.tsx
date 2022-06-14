import React, { FC } from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './Input.module.scss';
import { InputType } from './types';

export const Input: FC<InputType> = ({
  type,
  placeholder,
  id,
  text,
}): ReturnComponentType => (
  <div className={styles.inputWrapper}>
    <label className={styles.input__label} htmlFor={id}>
      {text}
    </label>
    <input
      className={styles.input__input}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  </div>
);
