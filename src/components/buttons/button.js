import styled from "styled-components";

export const StyledButton = styled.button`

  text-align: center;
  color: black;

  border: none;

  background-color: rgb(231, 158, 76);
div {

  width: 150px;
  height: 30px;

  text-align: center;
  color: black;

  border: none;

  background-color: rgb(231, 158, 76);
  &:hover {
    background-color: rgb(231, 120, 46);

    border: 1px solid black;
  }

  cursor: pointer;
  &.correct {
    background: green;
  }

  &.wrong {
    background: red;
  }
}
`;
