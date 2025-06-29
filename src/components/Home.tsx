import { Container } from "../styles/Home.ts";

import ClubsIcon from "../assets/icons/ClubsIcon.svg?react";
import SpadesIcon from "../assets/icons/SpadesIcon.svg?react";
import HeartsIcon from "../assets/icons/HeartsIcon.svg?react";
import DiamondsIcon from "../assets/icons/DiamondsIcon.svg?react";
import { Button } from "../generic/Button/index.tsx";
import { useContext } from "react";
import { AppContext } from "../lib/context.tsx";
import { ModalMessage } from "../generic/ModalMessage/index.tsx";
import defaultAvatar from "../../src/assets/icons/avatar_suits.png";
import { useTranslation } from "react-i18next";
import i18n from "../lib/language.ts";

interface HomeProps {
  goToPage: () => void;
}

export function Home({ goToPage }: HomeProps) {
  const {
    setShowModalSettings,
    userName,
    setUserName,
    quitSettings,
    setQuitSettings,
    emptyUserName,
    setEmptyUserName,
    selectedAvatar,
    setSelectedAvatar,
    setSelectedLanguage,
    setTheme,
    resetSettings,
    setResetSettings,
    setShowModalHelp,
  } = useContext(AppContext);

  const { t } = useTranslation();

  function SelectDefaultAvatar() {
    if (!selectedAvatar) {
      setSelectedAvatar(defaultAvatar);
    }
  }

  function ResetToDefaults() {
    setUserName("Player 001");
    setSelectedAvatar(defaultAvatar);
    setSelectedLanguage("en");
    setTheme("light");

    localStorage.setItem("blackjack_username", "Player 001");
    localStorage.setItem("blackjack_avatar", defaultAvatar);
    localStorage.setItem("blackjack_language", "en");
    localStorage.setItem("blackjack_theme", "light");

    i18n.changeLanguage("en");
  }

  return (
    <Container>
      <header className="app-header">
        <div className="left-icons">
          <ClubsIcon className="suit-icon" />
          <HeartsIcon className="suit-icon red-suit" />
        </div>
        <div className="app-title">
          <h1>REACT</h1>
          <h1>BLACKJACK</h1>
        </div>
        <div className="right-icons">
          <DiamondsIcon className="suit-icon red-suit" />
          <SpadesIcon className="suit-icon" />
        </div>
      </header>

      <div className="subHeader">
        <img
          src={selectedAvatar ? selectedAvatar : defaultAvatar}
          alt="Avatar"
          className="userAvatar"
        />
        <h2 className="subHeaderText">
          {t("Welcome")}, <span className="username">{userName}</span>!
        </h2>
      </div>

      <div className="home-buttons">
        <Button
          color="green"
          borderRadius="6px"
          width="150px"
          height="40px"
          functionButton={goToPage}
        >
          {t("Start Game")}
        </Button>

        <Button
          color="blue"
          borderRadius="6px"
          width="150px"
          height="40px"
          functionButton={() => setShowModalHelp(true)}
        >
          {t("How to Play")}
        </Button>

        <Button
          color="red"
          borderRadius="6px"
          width="150px"
          height="40px"
          functionButton={() => (
            setShowModalSettings(true), SelectDefaultAvatar()
          )}
        >
          {t("Settings")}
        </Button>
      </div>

      {quitSettings && (
        <ModalMessage
          textMessage={t("Do you want to quit without saving?")}
          textButton1={t("Cancel")}
          onClick1={() => setQuitSettings(false)}
          textButton2={t("Yes")}
          onClick2={() => (setQuitSettings(false), setShowModalSettings(false))}
        />
      )}

      {emptyUserName && (
        <ModalMessage
          textMessage={t("Your username cannot be empty!")}
          textButton1="OK"
          onClick1={() => setEmptyUserName(false)}
        />
      )}

      {resetSettings && (
        <ModalMessage
          textMessage={t("Do you want to reset the settings?")}
          textButton1={t("Cancel")}
          onClick1={() => setResetSettings(false)}
          textButton2={t("Yes")}
          onClick2={() => (
            setResetSettings(false),
            ResetToDefaults(),
            setShowModalSettings(false)
          )}
        />
      )}
    </Container>
  );
}
