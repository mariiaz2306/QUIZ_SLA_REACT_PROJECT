
import React, { useState } from 'react';
import { questions } from '../utils/questions'
import "../components/styles/QuizStyles.css"







const Quiz = ({}) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

    // <calcScore userAnswers={userAnswers} />
  const calcScore = () => {
    let score = 0;
    questions.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const handleShowResult = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };


    return (
        <div className='quiz_container'>
      <h1>Quiz</h1>
      {!showResults ? (
        <>
          {questions.map((question) => (
            <div key={question.id}>
              <p>{question.question}</p>
              <ol>
                {question.options.map((option) => (
                  <li key={option}>
                    <label>
                      <input
                        type="radio"
                        name={`question_${question.id}`}
                        value={option}
                        onChange={() => handleAnswerChange(question.id, option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ol>
            </div>
          ))}
          <button onClick={handleShowResult}>Show Result</button>
        </>
      ) : (
        <div className='results_container'>
          <h2>Results</h2>
          <p>Your score: {calcScore()} out of {questions.length}</p>///
          <button onClick={resetQuiz}>Retry</button>
        </div>
      )}
    </div>
  );
};
// const Quiz = () => {
//   const [userAnswers, setUserAnswers] = useState({});

//   const handleAnswerChange = (questionId, selectedAnswer) => {
//     setUserAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: selectedAnswer,
//     }));
//   };

//   const calculateScore = () => {
//     let score = 0;
//     questions.forEach((question) => {
//       const userAnswer = userAnswers[question.id];
//       if (userAnswer === question.correctAnswer) {
//         score += 1;
//       }
//     });
//     return score;
//   };

//   const handleShowResult = () => {
//     const score = calculateScore();
//     alert(`Your score: ${score} out of ${questions.length}`);
//   };

//   return (
//     <div>
//       <h1>Quiz</h1>
//       {questions.map((question) => (
//         <div key={question.id}>
//           <p>{question.question}</p>
//           <ul>
//             {question.options.map((option) => (
//               <li key={option}>
//                 <label>
//                   <input
//                     type="radio"
//                     name={`question_${question.id}`}
//                     value={option}
//                     onChange={() => handleAnswerChange(question.id, option)}
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <button onClick={handleShowResult}>Show Result</button>
//     </div>
//   );
// };

export default Quiz;
