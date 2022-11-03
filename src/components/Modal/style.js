import styled from "styled-components";

export const StyleModal = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: rgba(10, 10, 10, 0.3);

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 60%;
    height: 70%;
    padding: 1rem;

    display: flex;
    justify-content: center;

    background-color: white;

    button {
      position: relative;
      left: 300px;
    }
  }
`;
