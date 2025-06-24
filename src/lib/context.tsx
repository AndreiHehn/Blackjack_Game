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
  emptyUserName: boolean;
  setEmptyUserName: Dispatch<SetStateAction<boolean>>;
  selectedAvatar: string;
  setSelectedAvatar: Dispatch<SetStateAction<string>>;
  selectedLanguage: string;
  setSelectedLanguage: Dispatch<SetStateAction<string>>;
  resetSettings: boolean;
  setResetSettings: Dispatch<SetStateAction<boolean>>;
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
  isFadingIn: boolean;
  setIsFadingIn: Dispatch<SetStateAction<boolean>>;
  isFadingOut: boolean;
  setIsFadingOut: Dispatch<SetStateAction<boolean>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("blackjack_username") || "Player 001";
  });
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    localStorage.getItem("blackjack_avatar") || ""
  );
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem("blackjack_language") || "en";
  });

  const [theme, setTheme] = useState<string>(
    localStorage.getItem("blackjack_theme") || "light"
  );

  const [showModalSettings, setShowModalSettings] = useState<boolean>(false);
  const [quitSettings, setQuitSettings] = useState<boolean>(false);
  const [settingsChanged, setSettingsChanged] = useState<boolean>(false);
  const [emptyUserName, setEmptyUserName] = useState<boolean>(false);
  const [resetSettings, setResetSettings] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>("Home");
  const [isFadingIn, setIsFadingIn] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

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
        emptyUserName,
        setEmptyUserName,
        selectedAvatar,
        setSelectedAvatar,
        selectedLanguage,
        setSelectedLanguage,
        resetSettings,
        setResetSettings,
        activePage,
        setActivePage,
        theme,
        setTheme,
        isFadingIn,
        setIsFadingIn,
        isFadingOut,
        setIsFadingOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
