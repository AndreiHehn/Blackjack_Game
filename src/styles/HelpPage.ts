import styled from "styled-components";

interface Props {
  $iconPosition: string;
}

export const Container = styled.section<Props>`
  .pageTitle {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 800;
    color: var(--text-primary);
  }
  .sectionLine {
    width: 100%;
    height: 0;
    border: none;
    border-top: 1px solid var(--app-color);
    margin-top: 20px;
  }
  .pageInfo {
    display: flex;
    flex-direction: ${(props) =>
      props.$iconPosition == "right" ? "row" : "row-reverse"};
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    padding: 0 10px;
    gap: 10px;

    .pageText {
      width: 60%;
      font-size: 16px;
      color: var(--text-primary);
      font-weight: 400;
      text-align: justify;

      @media (max-width: 720px) {
        width: 70%;
      }
    }
    .pageIcon {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;

      @media (max-width: 720px) {
        width: 30%;
      }

      :first-child {
        width: 100px;
        height: 100px;

        path {
          fill: ${(props) =>
            props.$iconPosition == "right" ? "#000000" : "#FF0000"};
        }

        @media (max-width: 720px) {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
`;
