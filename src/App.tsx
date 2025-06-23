import { useContext, useEffect } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Game } from "./components/Game";
import { ModalSettings } from "./components/ModalSettings";
import { ModalGeneric } from "./generic/GenericModal";
import { AppContext } from "./lib/context";
import { useTranslation } from "react-i18next";

function App() {
  const {
    showModalSettings,
    setShowModalSettings,
    setQuitSettings,
    settingsChanged,
    theme,
    activePage,
  } = useContext(AppContext);

  const { t } = useTranslation();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light-theme", "dark-theme");

    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.add(prefersDark ? "dark-theme" : "light-theme");
    } else {
      root.classList.add(`${theme}-theme`);
    }
  }, [theme]);

  function VerifyModifications() {
    if (settingsChanged) {
      setQuitSettings(true);
    } else {
      setShowModalSettings(false);
    }
  }
  return (
    <>
      {activePage == "Home" ? <Home /> : activePage == "Game" ? <Game /> : null}
      {showModalSettings && (
        <ModalGeneric
          functionCloseModal={() => VerifyModifications()}
          mobileFullScreen
          top="50%"
          left="50%"
          title={t("Settings")}
          width="400px"
        >
          <ModalSettings></ModalSettings>
        </ModalGeneric>
      )}
    </>
  );
}

export default App;
