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
  const [localAvatar, setLocalAvatar] = useState(selectedAvatar);

  useEffect(() => {
    if (inputValue !== userName || selectedAvatar !== localAvatar) {
      setSettingsChanged(true);
    } else {
      setSettingsChanged(false);
    }
  }, [inputValue, userName, selectedAvatar, localAvatar]);

  function SaveChanges() {
    if (inputValue != "") {
      setUserName(inputValue);
      setSelectedAvatar(localAvatar);
      localStorage.setItem("blackjack_username", inputValue);
      localStorage.setItem("blackjack_avatar", localAvatar);
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
            selectedAvatar={localAvatar}
            onSelectAvatar={setLocalAvatar}
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
        <Button color="green" borderRadius="6px" functionButton={SaveChanges}>
          Save
        </Button>
      </footer>
    </Container>
  );
}
