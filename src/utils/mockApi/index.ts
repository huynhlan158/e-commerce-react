import { createServer } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

import { ServerFetchError } from '~/services/fetch.server';
import { ErrorType } from '~/types/FetchServer';
import { tab1Items, tab2Items, tab3Items, userList } from './mockData';

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

      // ===== Mock API for users service ===== //
      this.get('/users', (schema) => {
        return schema.db.userList;
      });

      this.get('/users/info/:id', (schema, request) => {
        const { id } = request.params;
        return schema.db.userList.find(id);
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

      // ===== Mock API for tab 2 ===== //
      this.get('/tab2-items', (schema) => {
        return schema.db.tab2Items;
      });

      // ===== Mock API for tab 3 ===== //
      this.get('/tab3-items', (schema) => {
        return schema.db.tab3Items;
      });
    },

    seeds(server) {
      server.db.loadData({
        userList: userList,
        tab1Items: tab1Items,
        tab2Items: tab2Items,
        tab3Items: tab3Items,
      });
    },
  });

  return server;
};

export const delay = async (time?: number) => {
  await new Promise((resolve) => setTimeout(resolve, time || 100));
};
