import React from 'react';

import { ReturnComponentType } from '../../../../types';

import { AdditionalAuthorization } from './AdditionalAuthorization';
import styles from './AuthorizationElements.module.scss';
import { AuthorizationTitle } from './AuthorizationTitle';
import { Button } from './Button';
import { Input } from './Input';
import { NoAccount } from './NoAccount';
import { Checkbox } from './Сheckbox';

export const AuthorizationElements = (): ReturnComponentType => (
  <div className={styles.elementsWrapper}>
    <AuthorizationTitle />
    <Input
      type="text"
      placeholder="Введите имя"
      id="UserNameAuthorizationElements"
      text="Имя"
    />
    <Input
      type="password"
      placeholder="Введите пароль"
      id="UserPasswordAuthorizationElements"
      text="Пароль"
    />
    <Checkbox />
    <Button text="Вход" />
    <AdditionalAuthorization
      text1="Авторизация с использованием ЕС ИФЮЛ"
      text2="Авторизация с использованием МСИ"
    />
    <NoAccount />
  </div>
);
