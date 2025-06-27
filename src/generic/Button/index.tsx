import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  functionButton?: (e: unknown) => void;
  color: "red" | "blue" | "green" | "gray";
  borderRadius?: string;
  margin?: string;
  width?: string;
  height?: string;
  hideButton?: boolean;
}

export function Button({
  children,
  disabled,
  functionButton,
  color,
  borderRadius,
  margin,
  width,
  height,
  hideButton,
}: Props) {
  return (
    <Container
      disabled={disabled}
      color={color}
      $borderRadius={borderRadius ?? "0px"}
      $margin={margin ?? "0px"}
      $width={width ?? "auto"}
      $height={height ?? "auto"}
      $hideButton={hideButton ?? false}
      onClick={functionButton}
    >
      {children}
    </Container>
  );
}
