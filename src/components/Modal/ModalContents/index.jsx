import produce from "immer";
import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../../context/myContext";
import { StyledButton } from "../../buttons/button";
import { StyledText } from "../../texts/texts";

const Contents = () => {
  const { myQuiz, setCurrentQuest, currentQuest, answerSelected, setAnswerSelected, currentSelection, setCurrentSelection, answerQuestion } = useContext(myContext);

  //   useEffect(() => {
  //     if (myQuiz) {
  //       selectRandomQuests();
  //     }
  //   }, [myQuiz]);

  //   const selectRandomQuests = () => {
  //     let newQuestList = produce(myQuiz, (draft) => {
  //       return draft;
  //     });

  //     let newChosenQuests = [];

  //     for (let i = 0; i < 10; i++) {
  //       let chosen = parseInt(Math.random() * newQuestList.length);
  //       newChosenQuests.push(newQuestList[chosen]);
  //       newQuestList = newQuestList.filter((elem, i) => i !== chosen);
  //     }
  //     setChosenQuests(newChosenQuests);
  //   };

  /*const quests = produce(myQuiz, (draft) => {
    if (draft) {
      let newChosenQuests = [];

      for (let i = 0; i < 10; i++) {
        let chosen = parseInt(Math.random() * draft.length);
        newChosenQuests.push(draft[chosen]);
        draft = draft.filter((elem, i) => i !== chosen);
      }
      return newChosenQuests;
    } else {
      return null;
    }
  });*/

  return (
    <>
      <section className="quest">
        <StyledText type={"02"}>
          {myQuiz[currentQuest]?.title}
        </StyledText>
      </section>
      <section className="aswener">
        {myQuiz[currentQuest]?.options.map(({ answer, point }, i) => (
            <StyledButton>
              <div
                key={i}
                type="button"
                onClick={() => answerQuestion(point, i)}
                className={`
                  ${answerSelected && point > 0 ? "correct" : ""}
                  ${answerSelected && point === 0 && currentSelection === i ? "wrong" : ""}
                `} 
              >
                <p>{answer}</p>
              </div>
            </StyledButton>
          ))}
      </section>
      {answerSelected && ( 
        <StyledButton
          type="button"
          onClick={() => {
            setAnswerSelected(false)
            setCurrentSelection(0)
            setCurrentQuest(currentQuest + 1)
          }}
        >
          Próximo
        </StyledButton>
      )}
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
