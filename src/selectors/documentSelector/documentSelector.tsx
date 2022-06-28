import { DocumentsType } from 'reduxStore/documentsReducer/types';
import { AppRootStateType } from 'reduxStore/types';

export const getDocumentsList = (state: AppRootStateType): DocumentsType[] =>
  state.documents.documents;
