import { Container } from "../styles/Transition";

import ClubsIcon from "../assets/icons/ClubsIcon.svg?react";
import SpadesIcon from "../assets/icons/SpadesIcon.svg?react";
import HeartsIcon from "../assets/icons/HeartsIcon.svg?react";
import DiamondsIcon from "../assets/icons/DiamondsIcon.svg?react";

export function TransitionPage() {
  return (
    <Container>
      <div className="loading">
        <div className="suitsSpinner">
          <ClubsIcon className="suitsIcon clubs" />
          <HeartsIcon className="suitsIcon hearts red" />
          <SpadesIcon className="suitsIcon spades" />
          <DiamondsIcon className="suitsIcon diamonds red" />
        </div>
        <h2 className="loadingText">Carregando...</h2>
      </div>
    </Container>
  );
}
