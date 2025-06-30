/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Container } from "../styles/ModalHelp";
import { Page } from "./HelpPage";
import ClubsIcon from "../assets/icons/ClubsIcon.svg?react";
import SpadesIcon from "../assets/icons/SpadesIcon.svg?react";
import HeartsIcon from "../assets/icons/HeartsIcon.svg?react";
import DiamondsIcon from "../assets/icons/DiamondsIcon.svg?react";
import ArrowNextIcon from "../../src/assets/icons/ArrowNextIcon.svg?react";
import ArrowPrevIcon from "../../src/assets/icons/ArrowPrevIcon.svg?react";

export function ModalHelp() {
  const { t } = useTranslation();
  const screenSize = window.innerWidth;

  function NextArrow(props: any) {
    const { onClick } = props;
    return <ArrowNextIcon className="carouselArrow" onClick={onClick} />;
  }

  function PrevArrow(props: any) {
    const { onClick } = props;
    return <ArrowPrevIcon className="carouselArrow" onClick={onClick} />;
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container>
      {screenSize > 720 ? (
        <Slider {...carouselSettings}>
          <Page
            pageTitle={t("Welcome to Blackjack!")}
            pageText={t(
              "Blackjack is a card game where the objective is to sum 21 points to your hand, or closer than that, without busting. It's you against the dealer!"
            )}
            pageIcon={<HeartsIcon />}
            iconPosition="left"
          />
          <Page
            pageTitle={t("Starting the Game")}
            pageText={t(
              "Each player receives two cards, while the Dealer's second card is always flipped. If one of the players has a Blackjack, it's endgame!"
            )}
            pageIcon={<ClubsIcon />}
            iconPosition="right"
          />
          <Page
            pageTitle={t("Your Turn") + " (1 / 2)"}
            pageText={t(
              "The button HIT allows to add one card to your hand, since you have 21 or less points in your hand."
            )}
            pageIcon={<DiamondsIcon />}
            iconPosition="left"
          />
          <Page
            pageTitle={t("Your Turn") + " (2 / 2)"}
            pageText={t(
              "The button STAND ends your turn, and starts Dealer's turn."
            )}
            pageIcon={<SpadesIcon />}
            iconPosition="right"
          />
          <Page
            pageTitle={t("Dealer's Turn") + " (1 / 3)"}
            pageText={t(
              "When your turn is finished, Dealer's second card will be displayed to you."
            )}
            pageIcon={<HeartsIcon />}
            iconPosition="left"
          />
          <Page
            pageTitle={t("Dealer's Turn") + " (2 / 3)"}
            pageText={t(
              "If Dealer's two cards sum is greater than 17, it's endgame, and the winner is the one with more points in hand!"
            )}
            pageIcon={<ClubsIcon />}
            iconPosition="right"
          />
          <Page
            pageTitle={t("Dealer's Turn") + " (3 / 3)"}
            pageText={t(
              "If Dealer's two cards sum is lower than 17, the Dealer will hit cards until having 17 points in hand."
            )}
            pageIcon={<DiamondsIcon />}
            iconPosition="left"
          />
        </Slider>
      ) : (
        <div className="mobilePages">
          <Page
            pageTitle={t("Welcome to Blackjack!")}
            pageText={t(
              "Blackjack is a card game where the objective is to sum 21 points to your hand, or closer than that, without busting. It's you against the dealer!"
            )}
            pageIcon={<HeartsIcon />}
            iconPosition="left"
          />
          <Page
            pageTitle={t("Starting the Game")}
            pageText={t(
              "Each player receives two cards, while the Dealer's second card is always flipped. If one of the players has a Blackjack, it's endgame!"
            )}
            pageIcon={<ClubsIcon />}
            iconPosition="right"
          />
          <Page
            pageTitle={t("Your Turn") + " (1 / 2)"}
            pageText={t(
              "The button HIT allows to add one card to your hand, since you have 21 or less points in your hand."
            )}
            pageIcon={<DiamondsIcon />}
            iconPosition="left"
          />
          <Page
            pageTitle={t("Your Turn") + " (2 / 2)"}
            pageText={t(
              "The button STAND ends your turn, and starts Dealer's turn."
            )}
            pageIcon={<SpadesIcon />}
            iconPosition="right"
          />
          <Page
            pageTitle={t("Dealer's Turn") + " (1 / 3)"}
            pageText={t(
              "When your turn is finished, Dealer's second card will be displayed to you."
            )}
            pageIcon={<HeartsIcon />}
            iconPosition="left"
          />
          <Page
            pageTitle={t("Dealer's Turn") + " (2 / 3)"}
            pageText={t(
              "If Dealer's two cards sum is greater than 17, it's endgame, and the winner is the one with more points in hand!"
            )}
            pageIcon={<ClubsIcon />}
            iconPosition="right"
          />
          <Page
            pageTitle={t("Dealer's Turn") + " (3 / 3)"}
            pageText={t(
              "If Dealer's two cards sum is lower than 17, the Dealer will hit cards until having 17 points in hand."
            )}
            pageIcon={<DiamondsIcon />}
            iconPosition="left"
          />
        </div>
      )}
    </Container>
  );
}
