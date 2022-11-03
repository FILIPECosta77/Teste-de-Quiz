import { createContext, useState } from "react";

export const myContext = createContext({});

export const MyProvider = ({ children }) => {
  const [myQuiz, setMyQuiz] = useState({});
  const [myStarQuiz, setMyStarQuiz] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState("todos");
  const [currentQuest, setCurrentQuest] = useState(0);
  // todos, planetas, estrelas

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
      }}
    >
      {children}
    </myContext.Provider>
  );
};
