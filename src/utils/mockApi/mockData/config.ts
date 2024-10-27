import { Config } from '~/services/config/models/Config';
import { ConfigKeys } from '~/services/config/models/Keys';

export const configList: Config[] = [
  { key: ConfigKeys.LOCALE, data: { language: 'VI' } },
  { key: ConfigKeys.SHIPMENT, data: { freeShipPrice: '99.000' } },
];
