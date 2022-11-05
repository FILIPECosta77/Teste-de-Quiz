import { createContext, useState, useEffect } from "react";
import api from "../api/api";

export const myContext = createContext({});

export const MyProvider = ({ children }) => {

  const [myQuiz, setMyQuiz] = useState(null); // sempre vai ter 10, quiz a ser utilizado e é random
  const [backupQuestions, setBackupQuestions] = useState(null); // todas as questões da API, tem 45, vamos selecionar aleatoriamente delas

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
    setAnswerSelected(false)
    setCurrentQuest(0)

    let newChosenQuests = [];
    for (let i = 0; i < 10; i++) {
      let chosen = parseInt(Math.random() * backupQuestions.length);
      newChosenQuests.push(backupQuestions[chosen]);
      //newChosenQuests = myQuiz.filter((elem, i) => i !== chosen); estava dando um erro com as questões nesse filter, por isso comentei ele. 
    }
    setMyQuiz(newChosenQuests);
  }

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyQG1haWwuY29tIiwiaWF0IjoxNjY3NjEzNDY5LCJleHAiOjE2Njc2MTcwNjksInN1YiI6IjMifQ.Oz8TtPkGrohuhHU5hXbUr3YeT6xlyZTDAWmOizZczZo";

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
          setBackupQuestions(planetsQuest.concat(starQuest));
        } else {
          const response = await api.get(`/quiz/?category=${modalContents}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setBackupQuestions(response.data[0].questions);
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
