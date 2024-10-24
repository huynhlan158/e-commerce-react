import { Config, ConfigKeys } from '~/services/config/models/Config';

export const configList: Config[] = [
  { key: ConfigKeys.LOCALE, data: { language: 'VI' } },
  { key: ConfigKeys.SHIPMENT, data: { freeShipPrice: '99.000' } },
];
