import styled from "styled-components";

export const Container = styled.main`
  .transition-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--background-primary);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    z-index: 9999;
  }
`;
