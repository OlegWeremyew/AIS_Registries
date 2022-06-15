import { CHANGE_ANSWER_STATUS } from '../constants';
import { QuestionsActionTypes, QuestionsInitialType, QuestionsTypeList } from '../types';

export const initialQuestionState = {
  questions: [
    {
      id: '1',
      title: 'Для подачи заявления необходимо подготовить',
      data1: 'Данные для авторизации в личном кабинете.',
      data2: 'Квалифицированный сертификат ключа проверки электронной подписи.',
      data3:
        'Сведения, документы и материалы в соответствии с Методическими рекомендациями.',
      data4: 'Установить специализированное ПО для',
      status: true,
    },
    {
      id: '2',
      title: 'Связь с оператором реестра',
      data1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      status: false,
    },
    {
      id: '3',
      title: 'Как подать заявление на включение программного обеспечения в реестр',
      data1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      status: false,
    },
    {
      id: '4',
      title: 'Где можно подать заявление',
      data1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      status: false,
    },
    {
      id: '5',
      title: 'Как узнать мне причину отказа',
      data1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      status: false,
    },
    {
      id: '6',
      title: 'Что делать, если Вам отказали',
      data1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      status: false,
    },
    {
      id: '7',
      title: 'Изменение реестревой записи',
      data1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      data4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis?',
      status: false,
    },
  ] as QuestionsTypeList[],
};

export const questionsReducer = (
  state: QuestionsInitialType = initialQuestionState,
  action: QuestionsActionTypes,
): QuestionsInitialType => {
  switch (action.type) {
    case CHANGE_ANSWER_STATUS: {
      return {
        ...state,
        questions: state.questions.map(question =>
          question.id === action.payload.id
            ? { ...question, status: action.payload.status }
            : question,
        ),
      };
    }
    default:
      return state;
  }
};
