import styled from "styled-components";

export interface Props {
  $width?: string;
  $height?: string;
  $mobileFullScreen?: boolean;
  $title?: boolean;
  $titleFontSize?: string;
  $top?: string;
  $bottom?: string;
  $right?: string;
  $left?: string;
}

export const Container = styled.div<Props>`
  background-color: #f4f4f5;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  z-index: 2;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  position: absolute;
  transform: translate(-50%, -50%);
  /* Tamanhos padrão (desktop) */
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};

  /* Fullscreen no mobile */
  @media (max-width: 768px) {
    ${(props) =>
      props.$mobileFullScreen &&
      `
      width: 100vw;
      height: 100vh;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 0;
      transform: none;
    `}
  }

  .modalHeader {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modalTitle {
    font-size: 20px;
  }
  .closeButton {
    display: flex;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
