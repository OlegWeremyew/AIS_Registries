import React from 'react';

import newsImg1 from '../../../../assets/images/startPageComponnets/registryNews/newsImg1.jpg';
import newsImg2 from '../../../../assets/images/startPageComponnets/registryNews/newsImg2.jpg';
import newsImg4 from '../../../../assets/images/startPageComponnets/registryNews/newsImg4.jpg';
import newsImg5 from '../../../../assets/images/startPageComponnets/registryNews/newsImg5.jpg';
import newsImg6 from '../../../../assets/images/startPageComponnets/registryNews/newsImg6.jpg';
import { ReturnComponentType } from '../../../../types';

import { Registry } from './Registry';
import { RegistryButton } from './RegistryButton';
import styles from './RegistryNews.module.css';

export const RegistryNews = (): ReturnComponentType => (
  <div className={styles.registryNewsWrapper}>
    <h1 className={styles.registryNews__title}>Новости реестра</h1>
    <div className={styles.registryBlock}>
      <Registry
        title="Технические работы 30.05.2022"
        addedTime="30.05.2022"
        description="В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер..."
        img={newsImg1}
      />
      <Registry
        title="Изменение справочника"
        addedTime="28.05.2022"
        description="Обращаем внимание, что с 28.05.2022 внесены изменения в справочник Дей..."
        img={newsImg2}
      />
      <Registry
        title="Технические работы 26.05.2022"
        addedTime="26.05.2022"
        description="В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер..."
        img={newsImg1}
      />
      <Registry
        title="Лицензирование в Беларуси"
        addedTime="25.05.2022"
        description="Лицензирование затрагивает отдельные виды деятельности в Республике Беларус..."
        img={newsImg4}
      />
      <Registry
        title="Тестирование системы новостей Ед..."
        addedTime="20.05.2022"
        description="Тестирование системы новостей ЕРЛ."
        img={newsImg5}
      />
      <Registry
        title="Обновление версии реестра ПО"
        addedTime="18.05.2022"
        description="В новой версии доступны новые функции, которые упрощают использование сервис..."
        img={newsImg6}
      />
    </div>
    <RegistryButton />
  </div>
);
