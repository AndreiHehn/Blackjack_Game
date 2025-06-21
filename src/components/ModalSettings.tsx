import { useContext, useRef } from "react";
import { Container } from "../styles/ModalSettings";
import { AppContext } from "../lib/context";
import { Button } from "../generic/Button";

export function ModalSettings() {
  const { userName, setUserName, setShowModalSettings } =
    useContext(AppContext);

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <section className="userSettings">
        <div className="sectionSeparator">
          <h2 className="locationText">User Settings</h2>
          <hr className="sectionLine" />
        </div>
        <div className="username">
          <h3 className="userNameText">User Name:</h3>
          <input
            type="text"
            className="usernameInput"
            ref={inputRef}
            defaultValue={userName}
            placeholder="Insert your username"
          />
        </div>
      </section>
      <footer className="modalFooter">
        <Button
          color="green"
          borderRadius="6px"
          functionButton={() => {
            if (inputRef.current) {
              setUserName(inputRef.current.value);
              localStorage.setItem(
                "blackjack_username",
                inputRef.current.value
              );
              setShowModalSettings(false);
            }
          }}
        >
          Save
        </Button>
      </footer>
    </Container>
  );
}
