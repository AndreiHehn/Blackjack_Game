import { useContext, useEffect, useState } from "react";
import { Container } from "../styles/ModalSettings";
import { AppContext } from "../lib/context";
import { Button } from "../generic/Button";
import { AvatarSelection } from "./AvatarSelection";
import { LanguageSelector } from "./LanguageSelector";
import i18n from "../lib/language";
import { useTranslation } from "react-i18next";

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
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState(userName);
  const [localAvatar, setLocalAvatar] = useState(selectedAvatar);
  const [localLanguage, setLocalLanguage] = useState(selectedLanguage);

  const { t } = useTranslation();

  // Verifies if one or more settings were changed --> Avatar / Username / Language
  useEffect(() => {
    if (
      inputValue !== userName ||
      selectedAvatar !== localAvatar ||
      selectedLanguage !== localLanguage
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
  ]);

  // Saves the settings if the username is not empty
  function SaveChanges() {
    if (inputValue != "") {
      setUserName(inputValue);
      setSelectedAvatar(localAvatar);
      setSelectedLanguage(localLanguage);
      i18n.changeLanguage(localLanguage);
      localStorage.setItem("blackjack_username", inputValue);
      localStorage.setItem("blackjack_avatar", localAvatar);
      localStorage.setItem("blackjack_language", localLanguage);
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
            defaultValue={userName}
            placeholder={t("Insert your username")}
          />
        </div>
      </section>
      <section className="languageAndTheme">
        <div className="sectionSeparator">
          <h2 className="locationText">{t("Language and Theme")}</h2>
          <hr className="sectionLine" />
        </div>
        <div className="languageSelector">
          <h3 className="languageLabel">{t("Language")}:</h3>
          <LanguageSelector
            selectedLanguage={localLanguage}
            onSelectLanguage={setLocalLanguage}
          />
        </div>
      </section>
      <footer className="modalFooter">
        <Button color="green" borderRadius="6px" functionButton={SaveChanges}>
          {t("Save")}
        </Button>
      </footer>
    </Container>
  );
}
