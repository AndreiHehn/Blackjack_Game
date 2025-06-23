import { useContext } from "react";
import { Button } from "../generic/Button/index.tsx";
import { Container } from "../styles/Game.ts";
import { AppContext } from "../lib/context.tsx";

export function Game() {
  const { setActivePage } = useContext(AppContext);
  return (
    <Container>
      <Button
        color="green"
        borderRadius="6px"
        width="130px"
        functionButton={() => setActivePage("Home")}
      >
        Back to Home
      </Button>
    </Container>
  );
}
