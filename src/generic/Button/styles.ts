import styled from "styled-components";

interface Props {
  color: string;
  $borderRadius: string;
  $margin: string;
}

export const Container = styled.button<Props>`
  color: #ffffff;
  background-color: ${({ color }) =>
    color == "red"
      ? "#FF0000"
      : color == "blue"
      ? "#0963CE"
      : color == "green"
      ? "#06BD70"
      : null};

  border: none;
  border-radius: ${(props) => props.$borderRadius};

  width: auto;
  height: auto;

  padding: 3px 16px;
  margin: ${(props) => props.$margin};

  line-height: 24px;
  font-weight: 500;
  font-size: 14px;
  font-family: "Segoe UI";
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${({ color }) =>
      color == "red"
        ? "#AA0505"
        : color == "blue"
        ? "#022F64"
        : color == "green"
        ? "#037746"
        : null};
  }
`;
