import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const QuizApp = () => {
  const questions = [
    { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "Who wrote Hamlet?", options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the boiling point of water?", options: ["90°C", "50°C", "100°C", "120°C"], answer: "100°C" },
    { question: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "Which is the smallest continent?", options: ["Europe", "Australia", "Antarctica", "Asia"], answer: "Australia" },
    { question: "Which is the longest river?", options: ["Nile", "Amazon", "Ganges", "Yangtze"], answer: "Nile" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "Which country invented tea?", options: ["India", "China", "Japan", "England"], answer: "China" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  const getComment = () => {
    if (score > 7) return 'Excellent! Great job!';
    if (score >= 4) return 'Good effort!';
    return 'Better luck next time!';
  };

  return (
    <motion.div 
      className="quiz-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>QUIZ APP</h1>
      {showResult ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="result"
        >
          🎉 You scored {score} out of {questions.length}!<br/>
          {getComment()}
        </motion.div>
      ) : (
        <motion.div 
          key={currentQuestion}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Question {currentQuestion + 1}</h2>
          <p className="question">{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOptionClick(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </motion.button>
            ))}
          </div>
          <button 
            className="submit-btn" 
            onClick={handleSubmit} 
            disabled={!selectedOption}
          >
            Submit
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizApp;
