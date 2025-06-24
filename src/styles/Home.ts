import styled from "styled-components";

export const Container = styled.main`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: var(--background-primary);

  .app-header {
    display: flex;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 0;
    margin-top: 10px;

    @media (max-width: 750px) {
      flex-direction: column;
    }

    .app-title {
      display: flex;
      gap: 16px;
      h1 {
        font-family: "Monoton", sans-serif;
        font-weight: 600;
        font-size: 72px;
        color: var(--text-primary);

        @media (max-width: 1050px) {
          font-size: 52px;
        }

        @media (max-width: 835px) {
          font-size: 40px;
        }

        @media (max-width: 450px) {
          font-size: 24px;
        }
      }
    }

    .left-icons,
    .right-icons {
      display: flex;
      gap: 10px;

      @media (max-width: 720px) {
        gap: 5px;
      }
    }

    .suit-icon {
      height: 70px;
      width: 70px;

      @media (max-width: 1160px) {
        height: 52px;
        width: 52px;
      }
    }

    .red-suit {
      path {
        fill: #ff0000;
      }
    }
  }

  .subHeader {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (max-width: 750px) {
      margin-top: 100px;
    }

    .userAvatar {
      width: 175px;
      border: 3px solid #aa0505;
      border-radius: 50%;

      @media (max-width: 750px) {
        width: 75px;
      }
    }

    .subHeaderText {
      font-weight: 600;
      color: var(--text-primary);
      font-size: 30px;

      @media (max-width: 720px) {
        font-size: 20px;
      }
    }

    .username {
      font-weight: 700;
      color: #aa0505;
    }
  }

  .home-buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media (max-width: 720px) {
      flex-direction: column;
    }
  }
`;
