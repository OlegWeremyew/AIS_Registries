import { QuestionsTypeList } from '../../reduxStore/questionReducer/types';
import { AppRootStateType } from '../../reduxStore/types';

export const getQuestionList = (state: AppRootStateType): QuestionsTypeList[] =>
  state.questions.questions;
