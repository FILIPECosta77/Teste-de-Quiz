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
    align-items: center;
    flex-direction: column;

    background-color: white;

    button {
      position: relative;
      left: 300px;
    }

    .quest {
      width: 80%;
      height: auto;
      padding: 1rem;

      margin-top: 30px;

      display: flex;
      justify-content: center;

      h3 {
        font-size: 18px;
      }
    }

    .aswener {
      width: 100%;
      height: 100%;
      padding: 1rem;

      margin-top: 30px;

      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30%;

      button {
        position: static;
      }
    }
  }
`;
