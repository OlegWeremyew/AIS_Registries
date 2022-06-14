import { InferActionTypes } from '../../types';
import { documentsAction } from '../documentsAction';
import { initialDocumentState } from '../documentsReducer/documentsReducer';

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
