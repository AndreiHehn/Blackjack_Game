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

    @media (max-width: 720px) {
      flex-direction: column;
    }

    .app-title {
      display: flex;
      gap: 16px;
      h1 {
        font-family: "Monoton", sans-serif;
        font-weight: 600;
        font-size: 72px;

        @media (max-width: 1160px) {
          font-size: 56px;
        }

        @media (max-width: 720px) {
          font-size: 32px;
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

      @media (max-width: 720px) {
        height: 24px;
        width: 24px;
      }
    }

    .red-suit {
      path {
        fill: #ff0000;
      }
    }
  }
`;
