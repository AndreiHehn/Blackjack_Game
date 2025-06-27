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
    }

    .dealerPoints {
      color: var(--text-primary);
    }

    .dealerCards {
      display: flex;
      gap: 10px;
      height: 151.2px;
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
    }

    .playerPoints {
      color: var(--text-primary);
    }

    .playerCards {
      display: flex;
      gap: 10px;
      height: 151.2px;
    }
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
    gap: 10px;
  }
`;
