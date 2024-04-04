import React from 'react'

const Questions = ({questions, onAnswerClick =()=>{}}) => {
    console.log(questions)
  return (
    <div className='questions'>
        <h1>{questions.question}</h1>
       
        
        <ul className='options'>
            {
                questions.answerOptions.map((option)=>{
                    return(
                        <li>
                       <button onClick={()=>onAnswerClick(option.isCorrect)}>{option.text}</button>
                        </li>
                    )
                }
            )}

        </ul>
    </div>
  )
}

export default Questions