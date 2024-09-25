import { httpRequest } from '~/services/fetch.server';

export const getTab1Items = async () => {
  const result = await httpRequest.get('tab1-items');
  return result.data;
};
