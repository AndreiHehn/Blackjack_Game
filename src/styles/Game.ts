import styled from "styled-components";

export const Container = styled.main`
  height: 100dvh;
  background-color: var(--background-primary);

  .userAvatar {
    width: 80px;
    border: 3px solid #aa0505;
    border-radius: 50%;
  }

  .dealerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;

    .dealerInfo {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .dealerText,
    .dealerPoints {
      font-size: 16px;
    }

    .dealerText {
      color: var(--app-color);
      font-weight: 800;
    }

    .dealerPoints {
      color: var(--text-primary);
      font-weight: 600;
    }
  }

  .playerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    .playerInfo {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .playerText,
    .playerPoints {
      font-size: 16px;
    }

    .playerText {
      color: var(--app-color);
      font-weight: 800;
    }

    .playerPoints {
      color: var(--text-primary);
      font-weight: 600;
    }
  }

  .dealerCards,
  .playerCards {
    display: flex;
    flex-wrap: nowrap; /* Impede quebra de linha */
    gap: 10px;
    overflow-x: auto; /* Scroll horizontal */
    overflow-y: hidden;
    max-width: 100vw; /* Garante que não estoure a tela */
    padding: 0 10px;

    @media (max-width: 720px) {
      height: 113.4px;
    }

    /* Estiliza a scrollbar para ficar mais agradável (opcional) */
    scrollbar-width: thin;
    scrollbar-color: var(--text-primary) transparent;
  }

  .dealerCards::-webkit-scrollbar,
  .playerCards::-webkit-scrollbar {
    height: 6px;
  }
  .dealerCards::-webkit-scrollbar-thumb,
  .playerCards::-webkit-scrollbar-thumb {
    background: var(--text-primary);
    border-radius: 4px;
  }

  .matchResult {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    color: var(--text-primary);
  }

  .actionButtons {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;

    .homeIcon,
    .newMatchIcon {
      cursor: pointer;

      path {
        fill: #f4f4f5;
      }

      &:hover {
        path {
          fill: rgb(174, 174, 174);
        }
      }

      @media (min-width: 720px) {
        display: none;
      }
    }
  }
`;
