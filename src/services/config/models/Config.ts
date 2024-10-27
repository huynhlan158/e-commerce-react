import { ConfigKeys } from './Keys';

interface LocaleConfigData {
  language: 'VI' | 'EN';
}

interface ShipmentConfigData {
  freeShipPrice: string;
}

export type Config =
  | {
      key: ConfigKeys.SHIPMENT;
      data: ShipmentConfigData;
    }
  | {
      key: ConfigKeys.LOCALE;
      data: LocaleConfigData;
    };
