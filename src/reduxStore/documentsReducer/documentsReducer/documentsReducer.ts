import { ActionRegisteredTypes, DocumentsType, InitialDocumentStateType } from '../types';

export const initialDocumentState = {
  documents: [
    {
      id: '1',
      category: 'Общие документы',
      name: `Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"`,
      date: '20.07.2021',
      number: 1226,
      weight: '469 Кб',
    },
    {
      id: '2',
      category: 'Общие документы',
      name: `Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных`,
      date: '22.09.2020',
      number: 468,
      weight: '10.81 Мб',
    },
    {
      id: '3',
      category: 'Общие документы',
      name: `Административный регламент ПРИКАЗ от 21 февраля 2019 года N62`,
      date: '21.02.2019',
      number: 62,
      weight: '2.25 Мб',
    },
    {
      id: '4',
      category: 'Общие документы',
      name: `Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"`,
      date: '20.12.2017',
      number: 1594,
      weight: '2.07 Мб',
    },
    {
      id: '5',
      category: 'Общие документы',
      name: `Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных`,
      date: '31.12.2015',
      number: 622,
      weight: '4.69 Мб',
    },
  ] as DocumentsType[],
};

export const documentsReducer = (
  state: InitialDocumentStateType = initialDocumentState,
  action: ActionRegisteredTypes,
): InitialDocumentStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
