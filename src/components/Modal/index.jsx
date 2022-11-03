import React, { useContext, useEffect } from "react";
import { myContext } from "../../context/myContext";
import { StyledButton } from "../buttons/button";
import { StyleModal } from "./style";
import api from "../../api/api";
import { StyledText } from "../texts/texts";

const Modal = () => {
  const {
    showModal,
    setShowModal,
    modalContents,
    setMyQuiz,
    myQuiz,
    currentQuest,
    setCurrentQuest,
  } = useContext(myContext);

  const click = () => {
    if (showModal === true) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwZUBnbWFpbC5jb20iLCJpYXQiOjE2Njc0OTk5NTUsImV4cCI6MTY2NzUwMzU1NSwic3ViIjoiNiJ9.s8e5_UpE3Y4N-in0bj6FJDzvrSAJYp6GNze8ENXYZrI";

  useEffect(() => {
    (async () => {
      try {
        if (modalContents === "todos") {
          const response = await api.get(`/quiz/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          let planetsQuest = response.data[0].questions;
          let starQuest = response.data[1].questions;
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
  console.log(myQuiz);

  const Contents = ({ myQuiz, currentQuest }) => {
    return (
      <section>
        <StyledText type={"02"}>
          {myQuiz && myQuiz[currentQuest]?.title}
        </StyledText>
      </section>
    );
  };

  return (
    <StyleModal>
      <section className="modal">
        <StyledButton type="button" onClick={click}>
          Fechar
        </StyledButton>
      </section>
      <Contents myQuiz={myQuiz} currentQuest={currentQuest} />
      {currentQuest}
      <StyledButton
        type="button"
        onClick={() => {
          console.log(myQuiz[0]);
        }}
      >
        Buton
      </StyledButton>
    </StyleModal>
  );
};

export default Modal;
