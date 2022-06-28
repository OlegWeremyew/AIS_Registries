import { InferActionTypes } from 'reduxStore/types';
import { initialDocumentState } from 'reduxStore/documentsReducer/documentsReducer/documentsReducer';
import { documentsAction } from 'reduxStore/documentsReducer';

export type InitialDocumentStateType = typeof initialDocumentState;
export type ActionRegisteredTypes = InferActionTypes<typeof documentsAction>;

export type DocumentsType = {
  id: string;
  category: string;
  name: string;
  date: string;
  number: number;
  weight: string;
};
