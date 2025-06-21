import { useContext } from "react";
import { Container } from "../styles/ModalSettings";
import { AppContext } from "../lib/context";

export function ModalSettings() {
  const { userName } = useContext(AppContext);
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
            defaultValue={userName}
            placeholder="Insert your username"
          />
        </div>
      </section>
    </Container>
  );
}
