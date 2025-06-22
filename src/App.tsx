import { useContext } from "react";
import "./App.css";
import { Home } from "./components/Home";
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
  } = useContext(AppContext);

  const { t } = useTranslation();

  function VerifyModifications() {
    if (settingsChanged) {
      setQuitSettings(true);
    } else {
      setShowModalSettings(false);
    }
  }
  return (
    <>
      <Home />
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
