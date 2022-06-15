import React, { FC } from 'react';

import { ReturnComponentType } from '../../../../types';

import styles from './Button.module.scss';
import { ButtonPropsType } from './types';

export const Button: FC<ButtonPropsType> = ({ text, callback }): ReturnComponentType => (
  <div className={styles.buttonWrapper}>
    <button onClick={callback} className={styles.button} type="button">
      {text}
    </button>
    <p className={styles.forgotPassword}>Забыли свой пароль?</p>
  </div>
);
