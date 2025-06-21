import { Container } from "../styles/Home.ts";

import ClubsIcon from "../assets/icons/ClubsIcon.svg?react";
import SpadesIcon from "../assets/icons/SpadesIcon.svg?react";
import HeartsIcon from "../assets/icons/HeartsIcon.svg?react";
import DiamondsIcon from "../assets/icons/DiamondsIcon.svg?react";
import { Button } from "../generic/Button/index.tsx";
import { useContext } from "react";
import { AppContext } from "../lib/context.tsx";

export function Home() {
  const { showModalSettings, setShowModalSettings, userName } =
    useContext(AppContext);

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
            setShowModalSettings(true), console.log(showModalSettings)
          )}
        >
          Settings
        </Button>
      </div>
    </Container>
  );
}
