import React from 'react';

import { ReturnComponentType } from 'types';

import styles from './DataElements.module.scss';
import { DataInput } from './DataInput';
import { DataSelect } from './DataSelect';

export const DataElements = (): ReturnComponentType => (
  <div className={styles.dataRowWrapper}>
    <DataInput value="Захар" id="name" label="Имя" placeholder="Введите имя" />
    <DataInput
      value="Палазник"
      id="surname"
      label="Фамилия"
      placeholder="Введите фамилию"
    />
    <DataInput
      value="Геннадьевич"
      id="fatherName"
      label="Отчество"
      placeholder="Введите отчество"
    />
    <DataSelect
      id="country"
      label="Страна"
      name="Страна"
      list={['Беларусь', 'Россия', 'Украина', 'Литва', 'Латвия']}
    />
    <DataSelect
      id="city"
      label="Город"
      name="Город"
      list={['Минск', 'Москва', 'Киев', 'Вильнюс', 'Рига']}
    />
    <DataInput
      value="+375 22 111 33 44"
      id="phone"
      label="Мобильный телефон"
      placeholder="Введите номер"
    />
  </div>
);
