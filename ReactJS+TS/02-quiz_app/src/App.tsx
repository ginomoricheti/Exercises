import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// types
import { QuestionsState, Difficulty } from './API';
// styles
import { GlobalStyle } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore (prev => prev + 1);
      // Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move to the next question if not the last
    const nextQuestion = number + 1;
    
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
    <GlobalStyle />
      <div className='flex flex-col items-center justify-center'>
        <p className='bg-gradient-to-r to-green-300 via-blue-500 from-purple-600 bg-clip-text text-8xl font-extrabold text-transparent mt-[100px] mb-[25px] drop-shadow-[0_3px_3px_rgba(255,255,255,0.7)]'>QUIZ</p>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="group inline-block rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" onClick={startTrivia}>
            <span className='block rounded-full bg-white px-8 py-3 text-1xl font-semibold group-hover:bg-transparent'>
              { number > 1 ? 'Restart game' : 'Start Trivia'}
            </span>
          </button>
        ) : null}
        {loading ? (
          <div className="flex gap-2 mt-[125px]">
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
          </div>
        ) : null}
        {!loading && !gameOver && (
          <>
            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
              <dt className="text-2xl font-semibold text-white">SCORE</dt>
              <dd className="bg-gradient-to-r bg-clip-text text-5xl font-extrabold text-white">{score}</dd>
            </div> 
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number]?.question}
              answers={questions[number]?.answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          </>
        )}
        {!loading && !gameOver &&userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button 
            className="group inline-block rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mt-[50px]" 
            onClick={nextQuestion}
          >
            <span className='block rounded-full bg-white px-8 py-3 text-1xl font-semibold group-hover:bg-transparent'>
              Next question
            </span>
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;
