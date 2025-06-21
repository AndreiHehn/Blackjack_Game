/* eslint-disable react-refresh/only-export-components */
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
  quitSettings: boolean;
  setQuitSettings: Dispatch<SetStateAction<boolean>>;
  settingsChanged: boolean;
  setSettingsChanged: Dispatch<SetStateAction<boolean>>;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("blackjack_username") || "Player 001";
  });
  const [showModalSettings, setShowModalSettings] = useState<boolean>(false);
  const [quitSettings, setQuitSettings] = useState<boolean>(false);
  const [settingsChanged, setSettingsChanged] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName,
        showModalSettings,
        setShowModalSettings,
        quitSettings,
        setQuitSettings,
        settingsChanged,
        setSettingsChanged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
