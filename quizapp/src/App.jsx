import React, { useState } from "react";
import Questions from "./components/Questions";
import questiondata from "./constants/questiondata.json";
import Result from "./components/Result";
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setuserAnswer] = useState([]);
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setuserAnswer([...userAnswer, isCorrect]);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setuserAnswer([]);
  };
  console.log(questiondata[0]);
  return (
    <div>
      {currentQuestion < questiondata.length && (
        <Questions
          questions={questiondata[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {currentQuestion === questiondata.length && (
        <Result
          questions={questiondata}
          userAnswer={userAnswer}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default App;
