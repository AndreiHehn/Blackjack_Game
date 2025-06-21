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
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  showModalSettings: boolean;
  setShowModalSettings: Dispatch<SetStateAction<boolean>>;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [userName, setUserName] = useState<string>("Player 001");
  const [showModalSettings, setShowModalSettings] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{ userName, setUserName, showModalSettings, setShowModalSettings }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
