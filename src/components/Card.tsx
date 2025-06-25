import { Container } from "../styles/Card.ts";

import ClubsIcon from "../assets/icons/ClubsIcon.svg?react";
import SpadesIcon from "../assets/icons/SpadesIcon.svg?react";
import HeartsIcon from "../assets/icons/HeartsIcon.svg?react";
import DiamondsIcon from "../assets/icons/DiamondsIcon.svg?react";
import BlackKingIcon from "../assets/icons/BlackKingIcon.png";
import RedKingIcon from "../assets/icons/RedKingIcon.png";
import BlackQueenIcon from "../assets/icons/BlackQueenIcon.png";
import RedQueenIcon from "../assets/icons/RedQueenIcon.png";
import BlackJackIcon from "../assets/icons/BlackJackIcon.png";
import RedJackIcon from "../assets/icons/RedJackIcon.png";

interface Props {
  isFlipped: boolean;
  suit: "clubs" | "spades" | "hearts" | "diamonds";
  symbol: string;
}

export function Card({ isFlipped, suit, symbol }: Props) {
  return (
    <Container $suit={suit} $isFlipped={isFlipped}>
      <div className="backgroundImage"></div>
      <div className="card">
        <div className="cardTop">
          <h2
            className={`cardSymbol ${
              suit == "hearts" || suit == "diamonds" ? "red" : ""
            }`}
          >
            {symbol}
          </h2>
          {suit == "clubs" ? (
            <ClubsIcon className="smallIcon" />
          ) : suit == "spades" ? (
            <SpadesIcon className="smallIcon" />
          ) : suit == "hearts" ? (
            <HeartsIcon className="smallIcon red" />
          ) : suit == "diamonds" ? (
            <DiamondsIcon className="smallIcon red" />
          ) : null}
        </div>
        {symbol == "K" ? (
          <img
            className="specialCard"
            src={
              suit == "hearts" || suit == "diamonds"
                ? RedKingIcon
                : BlackKingIcon
            }
            alt="blackKing"
          />
        ) : symbol == "Q" ? (
          <img
            className="specialCard"
            src={
              suit == "hearts" || suit == "diamonds"
                ? RedQueenIcon
                : BlackQueenIcon
            }
            alt="blackQueen"
          />
        ) : symbol == "J" ? (
          <img
            className="specialCard"
            src={
              suit == "hearts" || suit == "diamonds"
                ? RedJackIcon
                : BlackJackIcon
            }
            alt="blackJack"
          />
        ) : suit == "clubs" ? (
          <ClubsIcon className="suitIcon" />
        ) : suit == "spades" ? (
          <SpadesIcon className="suitIcon" />
        ) : suit == "hearts" ? (
          <HeartsIcon className="suitIcon red" />
        ) : suit == "diamonds" ? (
          <DiamondsIcon className="suitIcon red" />
        ) : null}
      </div>
    </Container>
  );
}
