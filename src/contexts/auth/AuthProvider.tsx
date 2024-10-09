import { ReactNode, useEffect, useReducer } from 'react';

import { getCookie, StorageKeys } from '~/utils/cookie';
import { getUserInfo } from '~/services/user/fetch.user';
import { initialize, reducer } from './reducers';
import { AuthContext, initialState } from './AuthContext';

function AuthProvider({ children }: { children?: ReactNode }) {
  const [state, authDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const accessToken = getCookie(StorageKeys.ACCESS_TOKEN);
      if (!accessToken) {
        return authDispatch(
          initialize({ isAuthenticated: false, userProfile: null })
        );
      }

      try {
        const userProfile = await getUserInfo(accessToken);
        initialize({ isAuthenticated: true, userProfile });
      } catch (error) {
        initialize({ isAuthenticated: false, userProfile: null });
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
