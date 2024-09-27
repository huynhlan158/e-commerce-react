import { ReactNode, useEffect, useReducer } from 'react';

import { initialize, reducer } from './reducers';
import { AuthContext, initialState } from './AuthContext';

function AuthProvider({ children }: { children?: ReactNode }) {
  const [state, authDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    authDispatch(initialize({ isAuthenticated: false, userProfile: null }));
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
