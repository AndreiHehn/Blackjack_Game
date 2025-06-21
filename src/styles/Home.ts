import styled from "styled-components";

export const Container = styled.main`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

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

  .home-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
