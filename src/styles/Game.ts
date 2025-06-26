import styled from "styled-components";

export const Container = styled.main`
  height: 100dvh;
  background-color: var(--background-primary);

  .playerCards {
    position: absolute;
    bottom: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
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
