import { Button } from "../generic/Button/index.tsx";
import { Container } from "../styles/Game.ts";
import { Card } from "./Card.tsx";
import RedBackground from "../assets/icons/RedBackground.png";

interface GameProps {
  goToPage: () => void;
}

export function Game({ goToPage }: GameProps) {
  return (
    <Container>
      <Button
        color="green"
        borderRadius="6px"
        width="130px"
        functionButton={goToPage}
      >
        Back to Home
      </Button>
      <div style={{ display: "flex", gap: "10px" }}>
        <Card isFlipped={true} symbol="J" suit="spades"></Card>
        <Card isFlipped={false} symbol="Q" suit="spades"></Card>
        <Card isFlipped={false} symbol="K" suit="hearts"></Card>
      </div>
    </Container>
  );
}
