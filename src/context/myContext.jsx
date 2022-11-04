import { createContext, useState, useEffect } from "react";
import api from "../api/api";

export const myContext = createContext({});

export const MyProvider = ({ children }) => {
  const [myQuiz, setMyQuiz] = useState(null);
  const [myStarQuiz, setMyStarQuiz] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState("todos");

  // todos, planetas, estrelas

  // sistema de atualização dos pontos
  const [points, setPoints] = useState(0);
  const [showPoints, setShowPoints] = useState(false);

  // Acompanhando evolução do participante
  const [currentQuest, setCurrentQuest] = useState(0); // avançar o participante nas questões
  const [answerSelected, setAnswerSelected] = useState(false) //não permite o usuario passar para proxima sem responder a atual
  const [currentSelection, setCurrentSelection] = useState() // para verificar se a opção se clicou é a correta, ou seja ganha + que 0

  const answerQuestion = (point, key) => {
    setAnswerSelected(true);
    setCurrentSelection(key);
    setPoints(point + points);
  };

  const updateQuiz = () => {
    let newChosenQuests = [];

    for (let i = 0; i < 10; i++) {
      let chosen = parseInt(Math.random() * myQuiz.length);
      newChosenQuests.push(myQuiz[chosen]);
      newChosenQuests = myQuiz.filter((elem, i) => i !== chosen);
    }

    setMyQuiz(newChosenQuests);
  }

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYW5kYUBrZW56aWUuY29tIiwiaWF0IjoxNjY3NjAwNDc5LCJleHAiOjE2Njc2MDQwNzksInN1YiI6IjYifQ.qzMuxPVcf6QlRpBDYVagKffrUGmU7ts-ZE_7YZPXdAI";

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

  return (
    <myContext.Provider
      value={{
        myQuiz,
        setMyQuiz,
        myStarQuiz,
        setMyStarQuiz,
        showModal,
        setShowModal,
        modalContents,
        setModalContents,
        currentQuest,
        setCurrentQuest,
        points,
        setPoints,
        showPoints,
        setShowPoints,
        answerSelected,
        setAnswerSelected,
        currentSelection,
        setCurrentSelection,
        answerQuestion,
        updateQuiz,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
