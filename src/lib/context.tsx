import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export const AppContext = createContext({} as AppContextProps);

interface AppContextProviderProps {
  children: ReactNode;
}
interface AppContextProps {
  showModalSettings: boolean;
  setShowModalSettings: Dispatch<SetStateAction<boolean>>;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [showModalSettings, setShowModalSettings] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ showModalSettings, setShowModalSettings }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
