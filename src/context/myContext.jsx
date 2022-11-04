import { createContext, useState } from "react";

export const myContext = createContext({});

export const MyProvider = ({ children }) => {
  const [myQuiz, setMyQuiz] = useState(null);
  const [myStarQuiz, setMyStarQuiz] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState("todos");
  // todos, planetas, estrelas
  const [currentQuest, setCurrentQuest] = useState(0);
  const [points, setPoints] = useState(0);
  const [showPoints, setShowPoints] = useState(false);

  const answerQuestion = (point) => {
    setPoints(point + points);
    setCurrentQuest(currentQuest + 1);
  };

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
        answerQuestion,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
