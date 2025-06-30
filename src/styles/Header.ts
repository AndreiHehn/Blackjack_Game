import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  background-color: var(--header-color);
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    justify-content: center;
  }

  .app-logo {
    display: flex;
    align-items: center;
    margin-left: 20px;
    gap: 16px;
    margin-right: 20px;

    .app-title {
      display: flex;
      gap: 16px;

      @media (max-width: 500px) {
        flex-direction: column;
        text-align: center;
      }
      h1 {
        font-family: "Monoton", sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #f4f4f5;

        @media (max-width: 500px) {
          font-size: 16px;
        }
      }
    }

    .left-icons,
    .right-icons {
      display: flex;
      gap: 10px;
    }

    .suit-icon {
      height: 30px;
      width: 30px;
    }

    .red-suit {
      path {
        fill: #ff0000;
      }
    }
  }

  .buttons {
    position: absolute;
    right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .homeIcon {
    width: 40px;
    height: 40px;
    cursor: pointer;

    path {
      fill: #f4f4f5;
    }

    &:hover {
      path {
        fill: rgb(174, 174, 174);
      }
    }

    @media (max-width: 720px) {
      display: none;
    }
  }

  .newMatchIcon,
  .helpIcon {
    width: 35px;
    height: 35px;
    cursor: pointer;

    path {
      fill: #f4f4f5;
    }

    &:hover {
      path {
        fill: rgb(174, 174, 174);
      }
    }

    @media (max-width: 720px) {
      display: none;
    }
  }
`;
