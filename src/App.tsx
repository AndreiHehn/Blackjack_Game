import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Game } from "./components/Game";
import { ModalSettings } from "./components/ModalSettings";
import { ModalGeneric } from "./generic/GenericModal";
import { AppContext } from "./lib/context";
import { useTranslation } from "react-i18next";
import { TransitionPage } from "./components/Transition";

function App() {
  const {
    showModalSettings,
    setShowModalSettings,
    setQuitSettings,
    settingsChanged,
    theme,
    activePage,
    setActivePage,
  } = useContext(AppContext);

  const [targetPage, setTargetPage] = useState<"Home" | "Game" | null>(null);
  const [transitionStep, setTransitionStep] = useState<
    | null
    | "fadeOutCurrent"
    | "fadeInTransition"
    | "waitBeforeFadeOutTransition"
    | "fadeOutTransition"
    | "fadeInTarget"
  >(null);

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

  useEffect(() => {
    if (!transitionStep) return;

    const durations = {
      fadeOutCurrent: 1000,
      fadeInTransition: 1000,
      waitBeforeFadeOutTransition: 5000,
      fadeOutTransition: 1000,
      fadeInTarget: 1000,
    };

    // Controla os passos da transição
    if (transitionStep === "fadeInTarget") {
      // Deixa rodar o fade-in e só depois reseta os estados
      const timer = setTimeout(() => {
        setTransitionStep(null);
        setTargetPage(null);
      }, durations.fadeInTarget);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      switch (transitionStep) {
        case "fadeOutCurrent":
          setActivePage("Transition");
          setTransitionStep("fadeInTransition");
          break;

        case "fadeInTransition":
          setTransitionStep("waitBeforeFadeOutTransition");
          break;

        case "waitBeforeFadeOutTransition":
          setTransitionStep("fadeOutTransition");
          break;

        case "fadeOutTransition":
          if (targetPage) {
            setActivePage(targetPage);
            setTransitionStep("fadeInTarget");
          }
          break;
      }
    }, durations[transitionStep]);

    return () => clearTimeout(timer);
  }, [transitionStep, targetPage, setActivePage]);

  function goToPageWithTransition(target: "Home" | "Game") {
    if (activePage === target || transitionStep) return;
    setTargetPage(target);
    setTransitionStep("fadeOutCurrent");
  }

  function VerifyModifications() {
    if (settingsChanged) {
      setQuitSettings(true);
    } else {
      setShowModalSettings(false);
    }
  }

  return (
    <>
      {activePage === "Home" && (
        <div
          className={
            transitionStep === "fadeOutCurrent" && targetPage === "Game"
              ? "fade-out"
              : transitionStep === "fadeInTarget" && activePage === "Home"
              ? "fade-in"
              : ""
          }
        >
          <Home goToPage={() => goToPageWithTransition("Game")} />
        </div>
      )}

      {activePage === "Game" && (
        <div
          className={
            transitionStep === "fadeOutCurrent" && targetPage === "Home"
              ? "fade-out"
              : transitionStep === "fadeInTarget" && activePage === "Game"
              ? "fade-in"
              : ""
          }
        >
          <Game goToPage={() => goToPageWithTransition("Home")} />
        </div>
      )}

      {activePage === "Transition" && (
        <div
          className={
            transitionStep === "fadeInTransition"
              ? "fade-in"
              : transitionStep === "fadeOutTransition"
              ? "fade-out"
              : ""
          }
        >
          <TransitionPage />
        </div>
      )}

      {showModalSettings && (
        <ModalGeneric
          functionCloseModal={VerifyModifications}
          mobileFullScreen
          top="50%"
          left="50%"
          title={t("Settings")}
          width="400px"
        >
          <ModalSettings />
        </ModalGeneric>
      )}
    </>
  );
}

export default App;
