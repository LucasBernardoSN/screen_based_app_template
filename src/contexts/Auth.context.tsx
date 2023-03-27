import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from 'react';
import { sleep } from '../utils/sleep';

type SignInCredentials = {
  username: string;
  password: string;
};

type AuthContext = {
  signIn: (credentials: SignInCredentials) => Promise<boolean>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext({} as AuthContext);

type Provider = {
  children: ReactNode;
};

export function AuthProvider({ children }: Provider) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem('react-router.token')
  );

  const signIn = useCallback(
    async ({ password, username }: SignInCredentials) => {
      if (password !== '123' || username !== 'admin') {
        // eslint-disable-next-line no-alert
        alert('Invalid username or password');
        return false;
      }

      await sleep(300);

      setIsAuthenticated(true);
      localStorage.setItem('react-router.token', '123');
      return true;
    },
    []
  );

  const signOut = useCallback(async () => {
    setIsAuthenticated(false);
    localStorage.removeItem('react-router.token');
  }, []);

  const providerProps = useMemo(
    () => ({
      isAuthenticated,
      signOut,
      signIn,
    }),
    [isAuthenticated, signOut, signIn]
  );

  return (
    <AuthContext.Provider value={providerProps}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
