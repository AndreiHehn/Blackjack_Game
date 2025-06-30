import { Container } from "../styles/Header";
import HomeIcon from "../assets/icons/HomeIcon.svg?react";
import HelpIcon from "../assets/icons/HelpIcon.svg?react";
import ClubsIcon from "../assets/icons/ClubsIcon.svg?react";
import SpadesIcon from "../assets/icons/SpadesIcon.svg?react";
import HeartsIcon from "../assets/icons/HeartsIcon.svg?react";
import DiamondsIcon from "../assets/icons/DiamondsIcon.svg?react";
import { useContext } from "react";
import { AppContext } from "../lib/context";

import NewMatchIcon from "../assets/icons/NewMatchIcon.svg?react";

interface Props {
  startMatch: () => void;
}

export function Header({ startMatch }: Props) {
  const { setBackToMenu, matchEnd, firstStart, setShowModalHelp } =
    useContext(AppContext);
  return (
    <Container>
      <div className="app-logo">
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
      </div>
      <div className="buttons">
        <NewMatchIcon
          className="newMatchIcon"
          onClick={!firstStart && !matchEnd ? undefined : startMatch}
        />
        <HelpIcon className="helpIcon" onClick={() => setShowModalHelp(true)} />
        <HomeIcon className="homeIcon" onClick={() => setBackToMenu(true)} />
      </div>
    </Container>
  );
}
