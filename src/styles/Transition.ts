import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.main`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: var(--background-primary);

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .suitsSpinner {
      position: relative;
      width: 120px; /* diâmetro do círculo */
      height: 120px;
      animation: ${spin} 3s linear infinite;
      margin-bottom: 20px;
    }

    .suitsIcon {
      position: absolute;
    }

    /* Posiciona os naipes nos 4 pontos cardeais do círculo */

    /* Top (Clubs) */
    .clubs {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 35px;
      height: 35px;
    }

    /* Right (Hearts) */
    .hearts {
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
    }

    /* Bottom (Spades) */
    .spades {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 35px;
      height: 35px;
    }

    /* Left (Diamonds) */
    .diamonds {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 35px;
      height: 35px;
    }

    .red {
      path {
        fill: red;
      }
    }

    .loadingText {
      font-size: 32px;
      color: var(--text-primary);

      @media (max-width: 720px) {
        font-size: 24px;
      }
    }
  }
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }

  .suitsIcon {
  }
`;
