import React from 'react'

const Result = ({questions,userAnswer,resetQuiz =()=>{}}) => {
    const correctAnswer = userAnswer.filter(answer=>answer).length;
  return (
    <div className='results'>
        <h2>
            Results
        </h2>
        <p> you have answered {correctAnswer} out of {questions.length} question{" "}</p>
        <span onClick={resetQuiz}>Reset Quiz</span>
        {questions.map((question,index)=>{
            return (
                <li key={index} data-correct ={userAnswer[index]}>
                  Q {index +1}  {question.question}
                  <b>
                    {userAnswer[index] ? "":`-${question.answerOptions.find((ans)=>ans.isCorrect).text}`}
                  </b>






                </li>
               
            )
        })}
    </div>
  )
}

export default Result