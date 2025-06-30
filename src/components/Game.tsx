import { useState, useCallback, useContext, useEffect } from "react";
import { Button } from "../generic/Button";
import { Container } from "../styles/Game";
import { Card } from "./Card";
import { Header } from "./Header";
import { t } from "i18next";
import { AppContext } from "../lib/context";
import { ModalMessage } from "../generic/ModalMessage";
import DealerAvatar from "../assets/icons/avatar_dealer.png";
import HomeIcon from "../assets/icons/HomeIcon.svg?react";
import NewMatchIcon from "../assets/icons/NewMatchIcon.svg?react";
import HelpIcon from "../assets/icons/HelpIcon.svg?react";

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
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const [deck, setDeck] = useState<PlayingCard[]>(generateDeck());
  const [dealerCards, setDealerCards] = useState<PlayingCard[]>([]);
  const [playerCards, setPlayerCards] = useState<PlayingCard[]>([]);
  const [revealDealerCards, setRevealDealerCards] = useState<boolean>(false);
  const [playerTurn, setPlayerTurn] = useState(false);

  const {
    backToMenu,
    setBackToMenu,
    selectedAvatar,
    userName,
    setMatchEnd,
    matchEnd,
    firstStart,
    setFirstStart,
    setShowModalHelp,
  } = useContext(AppContext);

  const getCardValue = (symbol: Symbol): number => {
    if (symbol === "A") return 11;
    if (["K", "Q", "J"].includes(symbol)) return 10;
    return parseInt(symbol);
  };

  const calculatePoints = (cards: PlayingCard[]): number => {
    let total = 0;
    let aceCount = 0;

    for (const card of cards) {
      if (card.symbol === "A") {
        total += 11;
        aceCount++;
      } else if (["K", "Q", "J"].includes(card.symbol)) {
        total += 10;
      } else {
        total += parseInt(card.symbol);
      }
    }

    // Ajusta A's de 11 para 1 até total <= 21
    while (total > 21 && aceCount > 0) {
      total -= 10;
      aceCount--;
    }

    return total;
  };

  const startMatch = useCallback(async () => {
    setFirstStart(false);
    setMatchEnd(false);
    setPlayerCards([]);
    setDealerCards([]);
    const newDeck = generateDeck();
    const drawCard = (): PlayingCard => {
      const index = Math.floor(Math.random() * newDeck.length);
      const card = newDeck[index];
      newDeck.splice(index, 1);
      return card;
    };

    const playerTemp: PlayingCard[] = [];
    const dealerTemp: PlayingCard[] = [];
    await sleep(1000);

    playerTemp.push(drawCard());
    setPlayerCards([...playerTemp]);
    await sleep(1000);

    dealerTemp.push(drawCard());
    setDealerCards([...dealerTemp]);
    await sleep(1000);

    playerTemp.push(drawCard());
    setPlayerCards([...playerTemp]);
    await sleep(1000);

    dealerTemp.push(drawCard());
    setDealerCards([...dealerTemp]);

    setDeck(newDeck);

    const playerInitialPoints = calculatePoints(playerTemp);
    const dealerInitialPoints = calculatePoints(dealerTemp);

    const isBlackjack =
      playerInitialPoints === 21 || dealerInitialPoints === 21;

    setRevealDealerCards(isBlackjack);
    setMatchEnd(isBlackjack);
    setPlayerTurn(!isBlackjack);
  }, [setMatchEnd]);

  const Hit = useCallback(async () => {
    await sleep(1000);
    const index = Math.floor(Math.random() * deck.length);
    const drawnCard = deck[index];

    setPlayerCards((prev) => [...prev, drawnCard]);
    setDeck((prev) => prev.filter((_, i) => i !== index));
  }, [deck, playerCards]);

  const Stand = useCallback(async () => {
    setPlayerTurn(false);
    setRevealDealerCards(true);

    const currentDeck = [...deck];
    const currentDealer = [...dealerCards];

    const drawCard = (): PlayingCard => {
      const index = Math.floor(Math.random() * currentDeck.length);
      const card = currentDeck[index];
      currentDeck.splice(index, 1);
      return card;
    };

    while (calculatePoints(currentDealer) < 17 && currentDeck.length > 0) {
      await sleep(1000);

      const card = drawCard();
      currentDealer.push(card);
      setDealerCards([...currentDealer]);
      setDeck([...currentDeck]);
    }

    setMatchEnd(true);
  }, [deck, dealerCards]);

  const playerPoints = calculatePoints(playerCards);
  const dealerVisiblePoints = !revealDealerCards
    ? dealerCards.length > 0
      ? getCardValue(dealerCards[0].symbol)
      : 0
    : calculatePoints(dealerCards);

  useEffect(() => {
    const playerTotal = calculatePoints(playerCards);

    if (playerCards.length === 0 || matchEnd) return;

    if (playerTotal > 21 || (playerTotal == 21 && playerCards.length == 2)) {
      setMatchEnd(true);
      setPlayerTurn(false);
      setRevealDealerCards(true);
    } else if (playerTotal === 21) {
      setPlayerTurn(false);
      setRevealDealerCards(true);

      const currentDeck = [...deck];
      const currentDealer = [...dealerCards];

      const drawCard = (): PlayingCard => {
        const index = Math.floor(Math.random() * currentDeck.length);
        const card = currentDeck[index];
        currentDeck.splice(index, 1);
        return card;
      };

      const dealerPlay = async () => {
        while (calculatePoints(currentDealer) < 17 && currentDeck.length > 0) {
          await sleep(1500);
          currentDealer.push(drawCard());
          setDealerCards([...currentDealer]);
          setDeck([...currentDeck]);
        }

        setMatchEnd(true);
      };

      dealerPlay();
    }
  }, [playerCards, matchEnd]);

  const getMatchResult = (): string => {
    if (!matchEnd) return "";
    if (playerPoints == 21 && playerCards.length == 2)
      return `BLACKJACK! ${userName} ${t("Won!")}`;

    if (dealerVisiblePoints == 21 && dealerCards.length == 2)
      return `BLACKJACK! ${t("Dealer Won!")}`;

    if (playerPoints > 21) return t("Dealer Won!");
    if (dealerVisiblePoints > 21 || playerPoints > dealerVisiblePoints)
      return `${userName} ${t("Won!")}`;
    if (dealerVisiblePoints > playerPoints) return t("Dealer Won!");
    return t("It's a draw!");
  };

  return (
    <Container>
      <Header startMatch={startMatch} />
      <nav className="subheader">
        <NewMatchIcon
          className="newMatchIcon"
          onClick={!firstStart && !matchEnd ? undefined : startMatch}
        />
        <HelpIcon className="helpIcon" onClick={() => setShowModalHelp(true)} />
        <HomeIcon className="homeIcon" onClick={() => setBackToMenu(true)} />
      </nav>

      <section className="dealerContainer">
        <div className="dealerInfo">
          <img src={DealerAvatar} alt="Avatar" className="userAvatar" />
          <div className="dealer">
            <h2 className="dealerText">{t("Dealer")}</h2>
            <h2 className="dealerPoints">
              {t("Points")}: {dealerVisiblePoints}
            </h2>
          </div>
        </div>
        <div className="containerCards">
          {dealerCards.map((card, index) => (
            <Card
              key={`dealer-${card.symbol}-${card.suit}-${index}`}
              isFlipped={index === 0 || revealDealerCards}
              symbol={card.symbol}
              suit={card.suit}
            />
          ))}
        </div>
      </section>
      <section className="matchResult">
        <h2 className="resultText">{getMatchResult()}</h2>
      </section>
      <section className="playerContainer">
        <div className="containerCards">
          {playerCards.map((card, index) => (
            <Card
              key={`player-${card.symbol}-${card.suit}-${index}`}
              isFlipped={true}
              symbol={card.symbol}
              suit={card.suit}
            />
          ))}
        </div>
        <div className="playerInfo">
          <div className="player">
            <h2 className="playerText">{userName}</h2>
            <h2 className="playerPoints">
              {t("Points")}:{" "}
              <span
                style={{
                  color: playerPoints > 21 ? "red" : "var(--text-primary)",
                }}
              >
                {playerPoints}
              </span>
            </h2>
          </div>
          <img src={selectedAvatar} alt="Avatar" className="userAvatar" />
        </div>
      </section>

      <footer className="actionButtons">
        <Button
          color="red"
          borderRadius="6px"
          width="130px"
          functionButton={Hit}
          disabled={
            playerCards.length === 0 || !playerTurn || playerPoints >= 21
          }
        >
          {t("Hit")}
        </Button>
        <Button
          color="gray"
          borderRadius="6px"
          width="130px"
          functionButton={Stand}
          disabled={
            playerCards.length === 0 || !playerTurn || playerPoints >= 21
          }
        >
          {t("Stand")}
        </Button>
      </footer>

      {backToMenu && (
        <ModalMessage
          textMessage={t("Do you want to leave the game?")}
          textButton1={t("Cancel")}
          onClick1={() => setBackToMenu(false)}
          textButton2={t("Yes")}
          onClick2={() => (
            setBackToMenu(false),
            goToPage(),
            setFirstStart(true),
            setMatchEnd(false)
          )}
        />
      )}
    </Container>
  );
}
