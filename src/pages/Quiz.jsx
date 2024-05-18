import { push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db } from "../firebase-config";

const initialQuestions = [
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
    question:
      "Which of the following is the correct extension of the Python file?",
    options: [".py", ".python", ".p", ".pyt"],
    answer: ".py",
  },
  {
    question:
      "Which of the following keywords is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    answer: "def",
  },
  {
    question:
      "What will be the output of the following Python code snippet: print('Hello World'.replace('World', 'Python'))?",
    options: ["Hello Python", "Hello World", "Python", "None of the above"],
    answer: "Hello Python",
  },
  {
    question:
      "Which of the following data types does not allow duplicate values in Python?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answer: "Set",
  },
  {
    question: "How do you insert COMMENTS in Python code?",
    options: [
      "//This is a comment",
      "#This is a comment",
      "/*This is a comment*/",
      "//This is a comment//",
    ],
    answer: "#This is a comment",
  },
  {
    question:
      "Which of the following operators is used to calculate remainder in a division?",
    options: ["#", "%", "&", "$"],
    answer: "%",
  },
  {
    question:
      "In Python, 'Hello', 'hello', and 'HELLO' are considered the same.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "What is the output of the following code snippet: print(type(10/2))?",
    options: [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'str'>",
      "<class 'bool'>",
    ],
    answer: "<class 'float'>",
  },
];

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userName, setUserName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    // Shuffle the questions when the component mounts
    const shuffledQuestions = shuffleArray(initialQuestions);
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleCardClick = () => {
    setShowForm(true);
  };

  const handleStartQuiz = () => {
    if (userName) {
      setStartQuiz(true);
      setShowForm(false);
    } else {
      alert("Please enter your name");
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    let updatedScore = score;
    if (isCorrect) {
      updatedScore += 1;
      setScore(updatedScore);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      saveScore(userName, updatedScore); // Use the updatedScore variable here
    }
  };

  const saveScore = (userName, score) => {
    const scoresRef = ref(db, "scores");
    const newScoreRef = push(scoresRef);
    set(newScoreRef, {
      userName: userName,
      score: score,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "#f5f5f5",
          margin: "20px auto",
          maxWidth: "600px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "80px 20px",
          borderRadius: "10px",
        }}
      >
        {!showForm && !startQuiz ? (
          <>
            <h1 style={{ textAlign: "center" }}>Quiz</h1>
            <div
              style={{
                cursor: "pointer",
                padding: "20px",
                textAlign: "center",
                minWidth: "200px",
                minHeight: "100px",
                backgroundColor: "#e0f7fa",
                borderRadius: "10px",
                margin: "20px auto",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              onClick={handleCardClick}
            >
              Basic Python 101
            </div>
          </>
        ) : showForm ? (
          <div
            style={{
              minWidth: "300px",
              minHeight: "200px",
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              margin: "20px auto",
              textAlign: "center",
            }}
            className="form-container"
          >
            <div className="input-container" style={{ marginBottom: "20px" }}>
              <input
                className="input-field"
                type="text"
                required
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div className="button-container">
              <button
                className="start-button"
                onClick={handleStartQuiz}
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px",
                  backgroundColor: "#00796b",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Start Quiz
              </button>
            </div>
          </div>
        ) : showScore ? (
          <div style={{ textAlign: "center" }}>
            <div>
              You scored {score} out of {questions.length}
            </div>
            <ul style={{ textAlign: "left", margin: "20px 0" }}>
              {questions.map((question, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {question.question} - Correct answer: {question.answer}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: "20px" }}>
              <div>{questions[currentQuestion].question}</div>
            </div>
            <div>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(
                      option === questions[currentQuestion].answer
                    )
                  }
                  style={{
                    display: "block",
                    margin: "10px 0",
                    padding: "10px",
                    width: "100%",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                    backgroundColor: "#e0f7fa",
                    textAlign: "left",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Quiz;
