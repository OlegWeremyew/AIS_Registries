import { InferActionTypes } from 'reduxStore/types';
import { initialQuestionState } from 'reduxStore/questionReducer/questionsReducer/questionsReducer';
import { questionsAction } from 'reduxStore/questionReducer';

export type QuestionsInitialType = typeof initialQuestionState;
export type QuestionsActionTypes = InferActionTypes<typeof questionsAction>;

export type QuestionsTypeList = {
  id: string;
  title: string;
  data1: string;
  data2?: string;
  data3?: string;
  data4?: string;
  status: boolean;
};
