import React, { useState } from 'react';

const questions = [
  {
    question: "What is the output of print(2 ** 3)?",
    options: ["8", "6", "9", "None of the above"],
    answer: "8",
  },
  {
    question: "What is a correct syntax to output 'Hello World' in Python?",
    options: [
      "echo 'Hello World'",
      "echo('Hello World')",
      "print('Hello World')",
      "console.log('Hello World')",
    ],
    answer: "print('Hello World')",
  },
  {
    question: "Which of the following is the correct extension of the Python file?",
    options: [".py", ".python", ".p", ".pyt"],
    answer: ".py",
},
{
    question: "Which of the following keywords is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    answer: "def",
},
{
    question: "What will be the output of the following Python code snippet: print('Hello World'.replace('World', 'Python'))?",
    options: ["Hello Python", "Hello World", "Python", "None of the above"],
    answer: "Hello Python",
},
{
    question: "Which of the following data types does not allow duplicate values in Python?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answer: "Set",
},
{
    question: "How do you insert COMMENTS in Python code?",
    options: ["//This is a comment", "#This is a comment", "/*This is a comment*/", "//This is a comment//"],
    answer: "#This is a comment",
},
{
    question: "Which of the following operators is used to calculate remainder in a division?",
    options: ["#", "%", "&", "$"],
    answer: "%",
},
{
    question: "In Python, 'Hello', 'hello', and 'HELLO' are considered the same.",
    options: ["True", "False"],
    answer: "False",
},
{
    question: "What is the output of the following code snippet: print(type(10/2))?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
    answer: "<class 'float'>",
}

  
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', margin: '20px', padding: '20px', maxWidth: '600px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h1>Quiz</h1>
      {showScore ? (
        <div>You scored {score} out of {questions.length}</div>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            <div>{questions[currentQuestion].question}</div>
          </div>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)}
                style={{ display: 'block', margin: '10px 0' }}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
