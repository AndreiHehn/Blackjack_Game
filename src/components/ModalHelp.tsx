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
    infinite: false,
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
      <Slider {...carouselSettings}>
        <Page
          pageTitle={t("Welcome to Blackjack!")}
          pageText={t(
            "Blackjack é um jogo de cartas onde o objetivo é somar 21 pontos ou o mais próximo disso, sem ultrapassar. Você joga contra o dealer. Simples e rápido!"
          )}
          pageIcon={<HeartsIcon />}
          iconPosition="left"
        />
        <Page
          pageTitle={t("Como Jogar")}
          pageText={t(
            "Escolha 'Hit' para pedir uma carta, ou 'Stand' para parar."
          )}
          pageIcon={<ClubsIcon />}
          iconPosition="right"
        />
        <Page
          pageTitle={t("Objetivo")}
          pageText={t("Fique mais próximo de 21 que o dealer sem ultrapassar!")}
          pageIcon={<DiamondsIcon />}
          iconPosition="left"
        />
        <Page
          pageTitle={t("Boa sorte!")}
          pageText={t("Divirta-se e jogue com responsabilidade.")}
          pageIcon={<SpadesIcon />}
          iconPosition="right"
        />
      </Slider>
    </Container>
  );
}
