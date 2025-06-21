import { useContext } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { ModalSettings } from "./components/ModalSettings";
import { ModalGeneric } from "./generic/GenericModal";
import { AppContext } from "./lib/context";

function App() {
  const { showModalSettings, setShowModalSettings } = useContext(AppContext);
  return (
    <>
      <Home />
      {showModalSettings && (
        <ModalGeneric
          functionCloseModal={() => setShowModalSettings(false)}
          mobileFullScreen
          top="50%"
          left="50%"
          title="Settings"
          width="400px"
        >
          <ModalSettings></ModalSettings>
        </ModalGeneric>
      )}
    </>
  );
}

export default App;
