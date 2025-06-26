import { useState, useCallback } from "react";
import { Button } from "../generic/Button";
import { Container } from "../styles/Game";
import { Card } from "./Card";
import { Header } from "./Header";

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

interface PlayingCard {
  symbol: Symbol;
  suit: Suit;
}

export function Game({ goToPage }: GameProps) {
  const [cards, setCards] = useState<PlayingCard[]>([
    { symbol: "J", suit: "spades" },
    { symbol: "5", suit: "hearts" },
  ]);

  /** Função para obter valor da carta */
  const getCardValue = (symbol: Symbol): number => {
    if (symbol === "A") return 11;
    if (["K", "Q", "J"].includes(symbol)) return 10;
    return parseInt(symbol); // "2" a "10"
  };

  /** Sorteia duas cartas aleatórias */
  const pickRandomCard = useCallback(() => {
    const randomCard = (): PlayingCard => ({
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      suit: suits[Math.floor(Math.random() * suits.length)],
    });

    const first = randomCard();
    const second = randomCard();
    setCards([first, second]);
  }, []);

  const cardValue =
    getCardValue(cards[0].symbol) + getCardValue(cards[1].symbol);

  return (
    <Container>
      <Header leaveGame={goToPage}></Header>

      <Button
        color="blue"
        borderRadius="6px"
        width="130px"
        functionButton={pickRandomCard}
      >
        Pick Cards
      </Button>

      {/* <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            isFlipped={true}
            symbol={card.symbol}
            suit={card.suit}
          />
        ))}
      </div>

      <h2 className="cardvalue">Valor total: {cardValue}</h2> */}
    </Container>
  );
}
