import { useState, useCallback, useContext } from "react";
import { Button } from "../generic/Button";
import { Container } from "../styles/Game";
import { Card } from "./Card";
import { Header } from "./Header";
import { t } from "i18next";
import { AppContext } from "../lib/context";
import { ModalMessage } from "../generic/ModalMessage";

type Suit = "diamonds" | "clubs" | "hearts" | "spades";
type Symbol =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

interface GameProps {
  goToPage: () => void;
}

interface PlayingCard {
  symbol: Symbol;
  suit: Suit;
}

const symbols: Symbol[] = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const suits: Suit[] = ["diamonds", "clubs", "hearts", "spades"];

const generateDeck = (): PlayingCard[] => {
  const deck: PlayingCard[] = [];
  for (const suit of suits) {
    for (const symbol of symbols) {
      deck.push({ symbol, suit });
    }
  }
  return deck;
};

export function Game({ goToPage }: GameProps) {
  const [deck, setDeck] = useState<PlayingCard[]>(generateDeck());
  const [cards, setCards] = useState<PlayingCard[]>([]);
  const { backToMenu, setBackToMenu } = useContext(AppContext);

  const getCardValue = (symbol: Symbol): number => {
    if (symbol === "A") return 11;
    if (["K", "Q", "J"].includes(symbol)) return 10;
    return parseInt(symbol);
  };

  const pickRandomCard = useCallback(() => {
    if (deck.length === 0) return; // fim do baralho

    const index = Math.floor(Math.random() * deck.length);
    const chosen = deck[index];

    setCards((prev) => [...prev, chosen]);
    setDeck((prev) => prev.filter((_, i) => i !== index)); // remove carta do baralho
  }, [deck]);

  const cardValue = cards.reduce(
    (total, card) => total + getCardValue(card.symbol),
    0
  );

  return (
    <Container>
      <Header />

      <Button
        color="blue"
        borderRadius="6px"
        width="130px"
        functionButton={pickRandomCard}
      >
        Pick Cards
      </Button>

      <div className="playerCards">
        {cards.map((card, index) => (
          <Card
            key={`${card.symbol}-${card.suit}-${index}`}
            isFlipped={true}
            symbol={card.symbol}
            suit={card.suit}
          />
        ))}
      </div>

      <h2 className="cardvalue">Valor total: {cardValue}</h2>

      <footer className="actionButtons">
        <Button
          color="red"
          borderRadius="6px"
          width="130px"
          functionButton={() => console.log("Hit")}
        >
          {t("Hit")}
        </Button>
        <Button
          color="gray"
          borderRadius="6px"
          width="130px"
          functionButton={() => console.log("Stand")}
        >
          {t("Stand")}
        </Button>
        <Button
          color="red"
          borderRadius="6px"
          width="130px"
          functionButton={() => console.log("Double")}
        >
          {t("Double")}
        </Button>
        <Button
          color="gray"
          borderRadius="6px"
          width="130px"
          functionButton={() => console.log("Split")}
        >
          {t("Split")}
        </Button>
      </footer>

      {backToMenu && (
        <ModalMessage
          textMessage={t("Do you want to leave the game?")}
          textButton1={t("Cancel")}
          onClick1={() => setBackToMenu(false)}
          textButton2={t("Yes")}
          onClick2={() => (setBackToMenu(false), goToPage())}
        />
      )}
    </Container>
  );
}
