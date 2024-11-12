import { createServer } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

import { ServerFetchError } from '~/services/fetch.server';
import { ErrorType } from '~/types/FetchServer';
import {
  tab1Items,
  userList,
  configList,
  shoppingCartList,
  categoryUnitList,
  categoryUnit2List,
  categoryUnit3List,
} from './mockData';

export const setupServer = () => {
  const server = createServer({
    routes() {
      this.namespace = 'mock-api';

      // ===== Mock API for authentication service ===== //
      this.post('/token', (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);
        const user = schema.db.userList.findBy({ username, id: password });
        if (user) {
          return user;
        } else {
          throw new ServerFetchError(
            ErrorType.AUTHENTICATION_FAILURE,
            401,
            'Wrong username or password'
          );
        }
      });

      // ===== Mock API for config service ===== //
      this.get('/config', (schema) => {
        return schema.db.configList;
      });

      this.get('/config/:key', (schema, request) => {
        const { key } = request.params;
        return schema.db.configList.findBy({ key });
      });

      // ===== Mock API for categories service ===== //
      this.get('/categories/:categoryUnitId', (schema, request) => {
        const { categoryUnitId } = request.params;
        const category = schema.db.categoryUnitList.find(categoryUnitId);
        if (category) {
          const categoryUnit2List = schema.db.categoryUnit2List.filter(
            (category2) => category2.ancestor_id === category.id
          );
          category.data = categoryUnit2List;
          if (categoryUnit2List.length) {
            categoryUnit2List.forEach((category2) => {
              const categoryUnit3List = schema.db.categoryUnit3List.filter(
                (category3) => category3.ancestor_id === category2.id
              );
              category2.data = categoryUnit3List;
            });
          }
        }
        return category;
      });

      // ===== Mock API for users service ===== //
      this.get('/users', (schema) => {
        return schema.db.userList;
      });

      this.get('/users/info/:id', (schema, request) => {
        const { id } = request.params;
        return schema.db.userList.find(id);
      });

      // ===== Mock API for cart service ===== //
      this.get('/findMyCart', (schema, request) => {
        const { Authorization } = request.requestHeaders;
        const userId = Authorization.replace('Bearer ', '');
        return schema.db.shoppingCartList.findBy({ user_id: userId });
      });

      // ===== Mock API for tab 1 ===== //
      this.get('/tab1-items', (schema) => {
        return schema.db.tab1Items;
      });

      this.post('/tab1-items', (schema, request) => {
        let newItem = JSON.parse(request.requestBody);
        newItem.id = uuidv4();
        schema.db.tab1Items.insert(newItem);
        return newItem;
      });

      this.delete('/tab1-items/delete/:id', (schema, request) => {
        const { id } = request.params;
        const deleteItem = schema.db.tab1Items.find(id);
        schema.db.tab1Items.remove(id);
        return deleteItem;
      });
    },

    seeds(server) {
      server.db.loadData({
        configList: configList,
        categoryUnitList: categoryUnitList,
        categoryUnit2List: categoryUnit2List,
        categoryUnit3List: categoryUnit3List,
        userList: userList,
        shoppingCartList: shoppingCartList,
        tab1Items: tab1Items,
      });
    },
  });

  return server;
};

export const delay = async (time?: number) => {
  await new Promise((resolve) => setTimeout(resolve, time || 100));
};
