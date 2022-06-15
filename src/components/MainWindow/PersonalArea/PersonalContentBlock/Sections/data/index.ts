import bell from '../../../../../../assets/images/personalArea/sections/bell.png';
import download from '../../../../../../assets/images/personalArea/sections/download.png';
import logout from '../../../../../../assets/images/personalArea/sections/logout.png';
import metaData from '../../../../../../assets/images/personalArea/sections/metaData.png';
import profile from '../../../../../../assets/images/personalArea/sections/profile.png';
import registry from '../../../../../../assets/images/personalArea/sections/registry.png';
import safety from '../../../../../../assets/images/personalArea/sections/safety.png';
import { DataArrayType } from '../types';

export const data: DataArrayType = [
  { id: '1', text: 'Мои данные', img: profile, style: 'active' },
  { id: '2', text: 'Уведомления', img: bell, style: 'none' },
  { id: '3', text: 'Реестры', img: registry, style: 'none' },
  { id: '4', text: 'Метаданные', img: metaData, style: 'none' },
  { id: '5', text: 'Безопасность', img: safety, style: 'none' },
  { id: '6', text: 'Мои загрузки', img: download, style: 'none' },
  { id: '7', text: 'Выход', img: logout, style: 'logout' },
];
