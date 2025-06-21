import { createContext, type ReactNode } from "react";

export const AppContext = createContext({} as AppContextProps);

interface AppContextProviderProps {
  children: ReactNode;
}
interface AppContextProps {}

export function AppContextProvider({ children }: AppContextProviderProps) {
  return <AppContext.Provider value={}></AppContext.Provider>;
}

export default AppContextProvider;
