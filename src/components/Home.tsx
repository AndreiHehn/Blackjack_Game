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

export function Home() {
  const {
    setShowModalSettings,
    userName,
    quitSettings,
    setQuitSettings,
    emptyUserName,
    setEmptyUserName,
    selectedAvatar,
    setSelectedAvatar,
  } = useContext(AppContext);

  function SelectDefaultAvatar() {
    if (!selectedAvatar) {
      setSelectedAvatar(defaultAvatar);
    }
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
          Welcome, <span className="username">{userName}</span>!
        </h2>
      </div>
      <div className="home-buttons">
        <Button
          color="green"
          borderRadius="6px"
          width="110px"
          functionButton={() => console.log("BOTÃO FUNCIONA")}
        >
          Start Game
        </Button>
        <Button
          color="blue"
          borderRadius="6px"
          width="110px"
          functionButton={() => console.log("BOTÃO FUNCIONA")}
        >
          How to Play
        </Button>
        <Button
          color="red"
          borderRadius="6px"
          width="110px"
          functionButton={() => (
            setShowModalSettings(true), SelectDefaultAvatar()
          )}
        >
          Settings
        </Button>
      </div>
      {quitSettings && (
        <ModalMessage
          textMessage="Do you want to quit without saving?"
          textButton1="Cancel"
          onClick1={() => setQuitSettings(false)}
          textButton2="Yes"
          onClick2={() => (setQuitSettings(false), setShowModalSettings(false))}
        ></ModalMessage>
      )}
      {emptyUserName && (
        <ModalMessage
          textMessage="Your username cannot be empty!"
          textButton1="OK"
          onClick1={() => setEmptyUserName(false)}
        ></ModalMessage>
      )}
    </Container>
  );
}
