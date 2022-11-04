import { useContext } from "react";
import { StyledButton } from "./components/buttons/button";
import { StyledText } from "./components/texts/texts";
import { myContext } from "./context/myContext";

import Card from "./components/Card";
import Modal from "./components/Modal";
import "./styles/global.css";

function App() {
  const { showModal, setShowModal, setModalContents, showPoints, points } =
    useContext(myContext);

  return (
    <main>
      <section className="titleClass">
        <StyledText type="01">Escolha seu quiz</StyledText>
      </section>
      {showPoints ? (
        <StyledText type="01">Seus pontos {points}</StyledText>
      ) : (
        false
      )}
      <section className="container">
        <div className="flexRow">
          <Card>
            <div>Planeta IMG</div>

            <div>Teste seus conhecimentos sobre Planetas</div>
            <StyledButton
              type="button"
              onClick={() => {
                setShowModal(!showModal);
                setModalContents("planetas");
              }}
            >
              Faça O Quiz
            </StyledButton>
          </Card>
          <Card>
            <div>Estrela IMG</div>

            <div>Teste seus conhecimentos sobre Estrelas </div>
            <StyledButton
              type="button"
              onClick={() => {
                setShowModal(!showModal);
                setModalContents("estrelas");
              }}
            >
              Faça O Quiz
            </StyledButton>
          </Card>
          <Card>
            <div>Planeta e Estrela IMG</div>

            <div>Teste seus conhecimentos sobre Planetas</div>
            <StyledButton
              type="button"
              onClick={() => {
                setShowModal(!showModal);
                setModalContents("todos");
              }}
            >
              Faça O Quiz
            </StyledButton>
          </Card>
        </div>
      </section>
      {showModal ? <Modal /> : false}
    </main>
  );
}

export default App;
