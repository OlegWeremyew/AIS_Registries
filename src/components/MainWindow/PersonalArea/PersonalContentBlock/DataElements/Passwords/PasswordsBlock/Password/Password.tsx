import React, { FC, useState } from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { ReturnComponentType } from 'types';

import styles from './Password.module.scss';
import { PasswordInput } from './PasswordInput';
import { PasswordPropsType } from './types';

export const Password: FC<PasswordPropsType> = ({ id, label }): ReturnComponentType => {
  const [status, setStatus] = useState<boolean>(false);
  const [visibility, setVisibility] = useState<boolean>(false);

  const type = !visibility ? 'password' : 'text';
  const imgEye = !visibility ? faEyeSlash : faEye;
  const labelStyle = status ? styles.active : styles.password__label;

  const changePasswordStatus = (status: boolean): void => {
    setStatus(status);
  };

  const changePasswordVisibility = (): void => {
    setVisibility(!visibility);
  };

  return (
    <div className={styles.passwordWrapper}>
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
      <PasswordInput
        type={type}
        id={id}
        imgEye={imgEye}
        changePasswordStatus={changePasswordStatus}
        changePasswordVisibility={changePasswordVisibility}
      />
    </div>
  );
};
