import newsImg1 from '../../../assets/images/startPageComponnets/registryNews/newsImg1.jpg';
import newsImg2 from '../../../assets/images/startPageComponnets/registryNews/newsImg2.jpg';
import newsImg4 from '../../../assets/images/startPageComponnets/registryNews/newsImg4.jpg';
import newsImg5 from '../../../assets/images/startPageComponnets/registryNews/newsImg5.jpg';
import newsImg6 from '../../../assets/images/startPageComponnets/registryNews/newsImg6.jpg';
import { NewsActionTypes, NewsInitialType, NewsListType } from '../types';

export const initialNewsState = {
  newsList: [
    {
      id: '1',
      title: 'Технические работы 30.05.2022',
      addedTime: '30.05.2022',
      description:
        'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...',
      img: newsImg1,
    },
    {
      id: '2',
      title: 'Изменение справочника',
      addedTime: '28.05.2022',
      description:
        'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник Дей...',
      img: newsImg2,
    },
    {
      id: '3',
      title: 'Технические работы 26.05.2022',
      addedTime: '26.05.2022',
      description:
        'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...',
      img: newsImg1,
    },
    {
      id: '4',
      title: 'Лицензирование в Беларуси',
      addedTime: '25.05.2022',
      description:
        'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...',
      img: newsImg4,
    },
    {
      id: '5',
      title: 'Тестирование системы новостей Ед...',
      addedTime: '20.05.2022',
      description: 'Тестирование системы новостей ЕРЛ.',
      img: newsImg5,
    },
    {
      id: '6',
      title: 'Обновление версии реестра ПО',
      addedTime: '20.05.2022',
      description:
        'В новой версии доступны новые функции, которые упрощают использование сервис...',
      img: newsImg6,
    },
  ] as NewsListType[],
};

export const newsReducer = (
  state: NewsInitialType = initialNewsState,
  action: NewsActionTypes,
): NewsInitialType => {
  switch (action.type) {
    default:
      return state;
  }
};
