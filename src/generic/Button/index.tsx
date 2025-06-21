import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  functionButton?: (e: unknown) => void;
  color: "red" | "blue" | "green";
  borderRadius?: string;
  margin?: string;
}

export function Button({
  children,
  disabled,
  functionButton,
  color,
  borderRadius,
  margin,
}: Props) {
  return (
    <Container
      disabled={disabled}
      color={color}
      $borderRadius={borderRadius ?? "0px"}
      $margin={margin ?? "0px"}
      onClick={functionButton}
    >
      {children}
    </Container>
  );
}
