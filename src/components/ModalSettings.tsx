import { useContext, useEffect, useState } from "react";
import { Container } from "../styles/ModalSettings";
import { AppContext } from "../lib/context";
import { Button } from "../generic/Button";
import { AvatarSelection } from "./AvatarSelection";
import { LanguageSelector } from "./LanguageSelector";
import i18n from "../lib/language";
import { useTranslation } from "react-i18next";
import { RadioButton } from "../generic/RadioButton";

export function ModalSettings() {
  const {
    userName,
    setUserName,
    setShowModalSettings,
    setSettingsChanged,
    setEmptyUserName,
    selectedAvatar,
    setSelectedAvatar,
    selectedLanguage,
    setSelectedLanguage,
    setResetSettings,

    setTheme,
    theme,
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState(userName);
  const [localAvatar, setLocalAvatar] = useState(selectedAvatar);
  const [localLanguage, setLocalLanguage] = useState(selectedLanguage);
  const [localTheme, setLocalTheme] = useState(theme);

  const { t } = useTranslation();

  // Verifies if one or more settings were changed --> Avatar / Username / Language / Theme
  useEffect(() => {
    if (
      inputValue !== userName ||
      selectedAvatar !== localAvatar ||
      selectedLanguage !== localLanguage ||
      theme !== localTheme
    ) {
      setSettingsChanged(true);
    } else {
      setSettingsChanged(false);
    }
  }, [
    inputValue,
    userName,
    selectedAvatar,
    localAvatar,
    selectedLanguage,
    localLanguage,
    theme,
    localTheme,
  ]);

  useEffect(() => {
    setInputValue(userName);
    setLocalAvatar(selectedAvatar);
    setLocalLanguage(selectedLanguage);
    setLocalTheme(theme);
  }, [userName, selectedAvatar, selectedLanguage, theme]);

  // Saves the settings if the username is not empty
  function SaveChanges() {
    if (inputValue != "") {
      setUserName(inputValue);
      setSelectedAvatar(localAvatar);
      setSelectedLanguage(localLanguage);
      setTheme(localTheme);
      i18n.changeLanguage(localLanguage);
      localStorage.setItem("blackjack_username", inputValue);
      localStorage.setItem("blackjack_avatar", localAvatar);
      localStorage.setItem("blackjack_language", localLanguage);
      localStorage.setItem("blackjack_theme", localTheme);
      setShowModalSettings(false);
    } else {
      setEmptyUserName(true);
    }
  }

  return (
    <Container>
      <section className="userSettings">
        <div className="sectionSeparator">
          <h2 className="locationText">{t("User Settings")}</h2>
          <hr className="sectionLine" />
        </div>
        <div className="avatar">
          <h2 className="avatarText">{t("Select your Avatar")}:</h2>
          <AvatarSelection
            selectedAvatar={localAvatar}
            onSelectAvatar={setLocalAvatar}
          />
        </div>
        <div className="username">
          <h3 className="userNameText">{t("User Name")}:</h3>
          <input
            type="text"
            className="usernameInput"
            onChange={(e) => setInputValue(e.target.value)}
            defaultValue={inputValue}
            placeholder={t("Insert your username")}
            maxLength={20}
          />
        </div>
      </section>
      <section className="languageAndTheme">
        <div className="sectionSeparator">
          <h2 className="locationText">{t("Language and Theme")}</h2>
          <hr className="sectionLine" />
        </div>
        <div className="languageSelector">
          <h3 className="languageText">{t("Language")}:</h3>
          <LanguageSelector
            selectedLanguage={localLanguage}
            onSelectLanguage={setLocalLanguage}
          />
        </div>
        <div className="themeSelector">
          <h3 className="themeText">{t("Theme")}:</h3>
          <div className="radioButtons">
            <RadioButton
              name="themeRB"
              text={t("Light Theme")}
              color="var(--app-color)"
              bgColor="var(--background-primary)"
              value="light"
              checked={localTheme == "light"}
              onChange={(val) => setLocalTheme(val)}
            ></RadioButton>
            <RadioButton
              name="themeRB"
              text={t("Dark Theme")}
              color="var(--app-color)"
              bgColor="var(--background-primary)"
              value="dark"
              checked={localTheme == "dark"}
              onChange={(val) => setLocalTheme(val)}
            ></RadioButton>
            <RadioButton
              name="themeRB"
              text={t("System Theme")}
              color="var(--app-color)"
              bgColor="var(--background-primary)"
              value="system"
              checked={localTheme == "system"}
              onChange={(val) => setLocalTheme(val)}
            ></RadioButton>
          </div>
        </div>
      </section>
      <footer className="modalFooter">
        <Button
          color="gray"
          borderRadius="6px"
          functionButton={() => setResetSettings(true)}
        >
          {t("Reset")}
        </Button>
        <Button color="green" borderRadius="6px" functionButton={SaveChanges}>
          {t("Save")}
        </Button>
      </footer>
    </Container>
  );
}
