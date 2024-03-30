// CodeEditor.js
import { useState, useEffect } from "react";
import { Pyodide } from "../pyodide";


function CodeEditor({ initialCode }) {
  const [pyprompt, setPyprompt] = useState(initialCode);
  const [pyoutput, setPyoutput] = useState("");
  const pyodide = Pyodide.getInstance();

  

  

  return (
    <>
      <div>
        <textarea
          style={styles.codeInput}
          value={pyprompt}
          onChange={(e) => setPyprompt(e.target.value)}
        ></textarea>

<button
          onClick={() => {
            setPyoutput("");
            pyodide.setOutput((text) => {
                setPyoutput((prev) => (prev ? prev + '\n' + text : text))
              });
            console.log("clicked", pyprompt);
            
            pyodide.run(pyprompt);
          }}
          style={styles.runButton}
        >
          Run
        </button>

        <p>Ouput:</p>
        <code style={styles.outputPre}>{pyoutput}</code>
       
      </div>
    </>
  );
}

const styles = {
    codeInput: {
      width: "100%",
      height: "200px",
      backgroundColor: "#333", 
      color: "#f8f8f2", 
      fontFamily: "monospace",
      fontSize: "1rem",
      border: "none",
      padding: "10px",
      borderRadius: "4px",
      boxSizing: "border-box",
      marginBottom: "10px",
    },
    runButton: {
      display: "inline-block",
      padding: "10px 15px",
      fontSize: "1rem",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginBottom: "10px",
    },
    output: {
      backgroundColor: "#222", // Slightly lighter than the code input for differentiation
      color: "#f8f8f2",
      fontFamily: "monospace",
      fontSize: "0.9rem",
      padding: "10px",
      borderRadius: "4px",
    },
    outputPre: {
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
    }
  };

export default CodeEditor;
