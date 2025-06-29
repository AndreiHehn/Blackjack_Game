import type { ReactElement } from "react";
import { Container } from "../styles/HelpPage";

interface Props {
  pageTitle: string;
  pageIcon: ReactElement;
  iconPosition: "left" | "right";
  pageText: string;
}

export function Page({ pageTitle, pageIcon, iconPosition, pageText }: Props) {
  return (
    <Container $iconPosition={iconPosition}>
      <hr className="sectionLine" />
      <h2 className="pageTitle">{pageTitle}</h2>
      <div className="pageInfo">
        <h3 className="pageText">{pageText}</h3>
        <div className="pageIcon">{pageIcon}</div>
      </div>
    </Container>
  );
}
