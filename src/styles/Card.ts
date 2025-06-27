import styled from "styled-components";
import BlackBackground from "../assets/icons/BlackBackground.png";
import RedBackground from "../assets/icons/RedBackground.png";

interface Props {
  $suit: string;
  $isFlipped: boolean;
}
export const Container = styled.div<Props>`
  .backgroundImage,
  .card {
    width: 108px;
    height: 151.2px;
    border-radius: 10px;
    position: relative;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  }
  .backgroundImage {
    display: ${(props) => (!props.$isFlipped ? "flex" : "none")};
    border: 2px solid #ffffff;

    background-image: url(${RedBackground});
    background-image: ${(props) =>
      props.$suit == "diamond" || props.$suit == "hearts"
        ? `url(${RedBackground})`
        : `url(${BlackBackground})`};
    background-position: center;
    background-size: cover;
    background-color: ${(props) =>
      props.$suit == "diamond" || props.$suit == "hearts"
        ? "#ff0000"
        : "#000000"};
  }
  .card {
    background-color: #f4f4f5;

    display: ${(props) => (props.$isFlipped ? "flex" : "none")};
    justify-content: center;
    /* flex-direction: column; */

    .suitIcon {
      width: 70px;
      height: 70px;
      position: absolute;
      bottom: 20px;
    }

    .specialCard {
      width: 90px;
      height: 90px;
      position: absolute;
      bottom: 5px;
    }
    .red {
      path {
        fill: red;
      }
    }

    .cardTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: fit-content;

      .cardSymbol {
        font-size: 28px;
        margin-left: 10px;
        margin-top: 5px;
      }
      .red {
        color: red;
      }

      .smallIcon {
        margin-top: 5px;
        margin-right: 10px;
        width: 28px;
        height: 28px;
      }
    }
  }
`;
