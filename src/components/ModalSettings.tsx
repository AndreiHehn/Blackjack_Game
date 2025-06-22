import { useContext, useEffect, useState } from "react";
import { Container } from "../styles/ModalSettings";
import { AppContext } from "../lib/context";
import { Button } from "../generic/Button";
import { AvatarSelection } from "./AvatarSelection";

export function ModalSettings() {
  const {
    userName,
    setUserName,
    setShowModalSettings,
    setSettingsChanged,
    setEmptyUserName,
    selectedAvatar,
    setSelectedAvatar,
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState(userName);

  useEffect(() => {
    setSettingsChanged(inputValue !== userName);
  }, [inputValue, userName]);

  function VerifyUsername() {
    if (inputValue != "") {
      setUserName(inputValue);
      localStorage.setItem("blackjack_username", inputValue);
      localStorage.setItem("blackjack_avatar", selectedAvatar);
      setShowModalSettings(false);
    } else {
      setEmptyUserName(true);
    }
  }

  return (
    <Container>
      <section className="userSettings">
        <div className="sectionSeparator">
          <h2 className="locationText">User Settings</h2>
          <hr className="sectionLine" />
        </div>
        <div className="avatar">
          <h2 className="avatarText">Select your Avatar:</h2>
          <AvatarSelection
            selectedAvatar={selectedAvatar}
            onSelectAvatar={setSelectedAvatar}
          />
        </div>
        <div className="username">
          <h3 className="userNameText">User Name:</h3>
          <input
            type="text"
            className="usernameInput"
            onChange={(e) => setInputValue(e.target.value)}
            defaultValue={userName}
            placeholder="Insert your username"
          />
        </div>
      </section>
      <footer className="modalFooter">
        <Button
          color="green"
          borderRadius="6px"
          functionButton={VerifyUsername}
        >
          Save
        </Button>
      </footer>
    </Container>
  );
}
