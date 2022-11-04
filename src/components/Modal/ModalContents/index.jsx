import produce from "immer";
import React, { useContext, useEffect, useState } from "react";
import api from "../../../api/api";
import { myContext } from "../../../context/myContext";
import { StyledButton } from "../../buttons/button";
import { StyledText } from "../../texts/texts";

const Contents = () => {
  const { myQuiz, setMyQuiz, currentQuest, modalContents, answerQuestion } =
    useContext(myContext);

  const [chosenQuests, setChosenQuests] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwZUBnbWFpbC5jb20iLCJpYXQiOjE2Njc1ODU0OTksImV4cCI6MTY2NzU4OTA5OSwic3ViIjoiMyJ9.xLSd0bpZXQ2Nx3McAUC5VVXwARSmPkihMXuFV31Br6E";

  useEffect(() => {
    (async () => {
      try {
        if (modalContents === "todos") {
          const response = await api.get(`/quiz`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const planetsQuest = response.data[0].questions;
          const starQuest = response.data[1].questions;
          setMyQuiz(planetsQuest.concat(starQuest));
        } else {
          const response = await api.get(`/quiz/?category=${modalContents}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setMyQuiz(response.data[0].questions);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (myQuiz) {
      selectRandomQuests();
    }
  }, [myQuiz]);

  const selectRandomQuests = () => {
    let newQuestList = produce(myQuiz, (draft) => {
      return draft;
    });

    let newChosenQuests = [];

    for (let i = 0; i < 10; i++) {
      let chosen = parseInt(Math.random() * newQuestList.length);
      newChosenQuests.push(newQuestList[chosen]);
      newQuestList = newQuestList.filter((elem, i) => i !== chosen);
    }
    setChosenQuests(newChosenQuests);
  };

  console.log("renderizou");

  return (
    <>
      <section className="quest">
        <StyledText type={"02"}>
          {chosenQuests && chosenQuests[currentQuest]?.title}
        </StyledText>
      </section>
      <section className="aswener">
        {chosenQuests &&
          chosenQuests[currentQuest]?.options.map(({ answer, point }, i) => (
            <StyledButton
              key={i}
              type="button"
              onClick={() => answerQuestion(point)}
            >
              {answer}
            </StyledButton>
          ))}
      </section>
    </>
  );
};

export default Contents;

// function gerar(fim) {
//   //Remoção do + 1 para evitar acessar um índice inexistente do array
//   return Math.floor(Math.random() * fim);
// }

// let numeroPessoas = window.prompt("Digite um numero de pessoas");
// let vetor = new Array();

// for (let i = 1; i <= numeroPessoas; i++) {
//   let nome = window.prompt("Digite o nome");
//   vetor.push([i] + "º" + " -" + " " + nome + " ");
// }
// let k = 0;
// for (let j = 0; j < numeroPessoas; j++) {
//   k = gerar(numeroPessoas); // Ou usar o vetor.lenght
//   document.write(vetor[k] + "<br>" + "<hr>");
// }
