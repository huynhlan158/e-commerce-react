export enum ConfigQueryKeys {
  CONFIG_LIST = 'CONFIG_LIST',
  CONFIG = 'CONFIG',
}

export enum ConfigKeys {
  SHIPMENT = 'shipment',
  LOCALE = 'locale',
}

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
