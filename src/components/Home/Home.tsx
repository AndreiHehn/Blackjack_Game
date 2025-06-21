import { Container } from "../../styles/Home.ts";

import ClubsIcon from "../../assets/icons/ClubsIcon.svg?react";
import SpadesIcon from "../../assets/icons/SpadesIcon.svg?react";
import HeartsIcon from "../../assets/icons/HeartsIcon.svg?react";
import DiamondsIcon from "../../assets/icons/DiamondsIcon.svg?react";
import { Button } from "../../generic/Button/index.tsx";

export function Home() {
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
      <Button
        color="green"
        borderRadius="6px"
        margin="20px 0"
        functionButton={() => console.log("BOTÃO FUNCIONA")}
      >
        Start Game
      </Button>
    </Container>
  );
}
