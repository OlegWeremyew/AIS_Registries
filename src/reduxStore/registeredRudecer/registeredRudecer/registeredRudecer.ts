import {
  CHANGE_SORT_BY_REGISTRATION_NAMES_SOFTWARE,
  CHANGE_SORT_BY_REGISTRATION_NUMBERS,
  SET_REGISTRATION_SEARCH,
} from '../constants';
import { ActionRegisteredTypes, registeredInitialType, RegisterItemType } from '../types';

export const initialRegistered = {
  registers: [
    {
      registrationNumbers: '1',
      softwareName: 'Система управления базами данных «Ред База Данных»',
      classCode: '02.09',
      softwareClass: 'Системы управления базами данных',
      registrationDate: '29.01.2016',
      websiteAddress: '#',
    },
    {
      registrationNumbers: '2',
      softwareName: '1С:Школа. Информатика, 11 класс',
      classCode: '04.11',
      softwareClass: 'Системы управления процессами организации',
      registrationDate: '29.01.2016',
      websiteAddress: '#',
    },
    {
      registrationNumbers: '3',
      softwareName: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
      classCode: '04.11',
      softwareClass: 'Информационные системы для решения специфических отраслевых задач',
      registrationDate: '29.01.2016',
      websiteAddress: '#',
    },
    {
      registrationNumbers: '4',
      softwareName: '1С:Комплексная автоматизация 8',
      classCode: '04.11',
      softwareClass: 'Системы управления процессами организации',
      registrationDate: '20.02.2016',
      websiteAddress: '#',
    },
    {
      registrationNumbers: '5',
      softwareName: 'Электронный периодический справочник "Система ГАРАНТ"',
      classCode: '04.15',
      softwareClass: 'Прикладное программное обеспечение общего назначения',
      registrationDate: '20.02.2016',
      websiteAddress: '#',
    },
    {
      registrationNumbers: '6',
      softwareName:
        'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»',
      classCode: '04.13',
      softwareClass:
        'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
      registrationDate: '1.03.2016',
      websiteAddress: '#',
    },
    {
      registrationNumbers: '7',
      softwareName: 'ABBYY Lingvo',
      classCode: '04.07',
      softwareClass: 'Лингвистическое программное обеспечение',
      registrationDate: '11.03.2016',
      websiteAddress: '#',
    },
    {
      registrationNumbers: '8',
      softwareName: '1С-Битрикс24 (Компания)',
      classCode: '04.03',
      softwareClass: 'Офисные приложения',
      registrationDate: '14.03.2016',
      websiteAddress: '#',
    },
    {
      registrationNumbers: '9',
      softwareName: '1С-Битрикс24 (Проект+)',
      classCode: '04.03',
      softwareClass:
        'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
      registrationDate: '14.03.2016',
      websiteAddress: '#',
    },
    {
      registrationNumbers: '10',
      softwareName: '1С-Битрикс24 (Команда)',
      classCode: '04.03',
      softwareClass:
        'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
      registrationDate: '14.03.2016',
      websiteAddress: '#',
    },
  ] as RegisterItemType[],
};

export const registeredReducer = (
  state: registeredInitialType = initialRegistered,
  action: ActionRegisteredTypes,
): registeredInitialType => {
  switch (action.type) {
    case CHANGE_SORT_BY_REGISTRATION_NUMBERS: {
      return {
        ...state,
        registers: [...state.registers.reverse()],
      };
    }
    case CHANGE_SORT_BY_REGISTRATION_NAMES_SOFTWARE: {
      return {
        ...state,
        registers:
          action.payload.sortStatus === 'up sort'
            ? [
                ...state.registers.sort((a, b) =>
                  b.softwareName > a.softwareName ? 1 : -1,
                ),
              ]
            : [
                ...state.registers.sort((a, b) =>
                  a.softwareName > b.softwareName ? 1 : -1,
                ),
              ],
      };
    }
    case SET_REGISTRATION_SEARCH: {
      return {
        ...state,
        registers: !action.payload.search
          ? [...state.registers]
          : [
              ...state.registers.filter(item =>
                item.softwareName.toLowerCase().includes(action.payload.search),
              ),
            ],
      };
    }
    default:
      return state;
  }
};
