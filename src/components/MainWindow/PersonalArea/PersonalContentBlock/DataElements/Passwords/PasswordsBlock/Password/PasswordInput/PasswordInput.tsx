import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReturnComponentType } from '../../../../../../../../../types';

import styles from './PasswordInput.module.scss';
import { PasswordInputPropsType } from './types';

export const PasswordInput: FC<PasswordInputPropsType> = ({
  id,
  imgEye,
  changePasswordStatus,
  type,
  changePasswordVisibility,
}): ReturnComponentType => (
  <div className={styles.passwordInputWrapper}>
    <span onClick={changePasswordVisibility} className={styles.visibility__label}>
      <FontAwesomeIcon icon={imgEye} />
    </span>
    <input
      onClick={() => changePasswordStatus(true)}
      onBlur={() => changePasswordStatus(false)}
      className={styles.password__input}
      id={id}
      type={type}
    />
  </div>
);
