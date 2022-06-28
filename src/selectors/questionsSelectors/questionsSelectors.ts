import { AppRootStateType } from 'reduxStore/types';
import { QuestionsTypeList } from 'reduxStore/questionReducer/types';

export const getQuestionList = (state: AppRootStateType): QuestionsTypeList[] =>
  state.questions.questions;
