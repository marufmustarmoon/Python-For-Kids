import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db } from "../firebase-config";

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const scoresRef = ref(db, "scores");
    onValue(scoresRef, (snapshot) => {
      const data = snapshot.val();
      const scoresList = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      scoresList.sort((a, b) => b.score - a.score);
      setScores(scoresList);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          background: "#f2fcfe",
          padding: "70px",
          maxWidth: "100%",
          margin: "3rem auto",
          borderRadius: "1rem",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "black",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Leaderboard
        </h1>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              minWidth: "100%",
              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
              borderCollapse: "collapse",
            }}
          >
            <thead
              style={{
                background: "#1c92d2",
                color: "white",
              }}
            >
              <tr>
                <th
                  style={{
                    padding: "1rem",
                    textAlign: "left",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  Rank
                </th>
                <th
                  style={{
                    padding: "1rem",
                    textAlign: "left",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    padding: "1rem",
                    textAlign: "left",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  Score
                </th>
                <th
                  style={{
                    padding: "1rem",
                    textAlign: "left",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr
                  key={score.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f1f1f1")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      index % 2 === 0 ? "#f9f9f9" : "white")
                  }
                >
                  <td
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontSize: "1rem",
                      color: "#333",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontSize: "1rem",
                      color: "#333",
                    }}
                  >
                    {score.userName}
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontSize: "1rem",
                      color: "#333",
                    }}
                  >
                    {score.score}
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontSize: "1rem",
                      color: "#333",
                    }}
                  >
                    {new Date(score.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
