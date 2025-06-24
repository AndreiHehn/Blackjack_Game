import { Button } from "../generic/Button/index.tsx";
import { Container } from "../styles/Game.ts";

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
    </Container>
  );
}
