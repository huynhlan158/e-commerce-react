import { createServer } from 'miragejs';
import { tab1Items, tab2Items, tab3Items, userList } from './mockData';
import { ServerFetchError } from '~/services/fetch.server';
import { ErrorType } from '~/types/FetchServer';

export const setupServer = () => {
  const delay = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
  };

  const server = createServer({
    routes() {
      this.namespace = 'mock-api';

      // ===== Mock API for authentication service ===== //
      this.post('/token', (schema, request) => {
        delay();
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
        delay();
        return schema.db.userList;
      });

      this.get('/users/info/:id', (schema, request) => {
        delay();
        const { id } = request.params;
        return schema.db.userList.find(id);
      });

      // ===== Mock API for tab 1 ===== //
      this.get('/tab1-items', (schema) => {
        delay();
        return schema.db.tab1Items;
      });

      // ===== Mock API for tab 2 ===== //
      this.get('/tab2-items', (schema) => {
        delay();
        return schema.db.tab2Items;
      });
      // ===== Mock API for tab 3 ===== //
      this.get('/tab3-items', (schema) => {
        delay();
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
