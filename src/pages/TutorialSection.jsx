import React from "react";
import CodeEditor from "./CodeEditor";

function TutorialSection({ section }) {
  return (
    <div className="tutorial-section" style={styles.tutorialSection}>
      <div style={styles.content}>
        <h2 style={styles.title}>{section.title}</h2>
        <p style={styles.paragraph}>{section.content}</p>
      </div>
      <div style={styles.editorContainer}>
        <div style={styles.editorHeader}>
          <span style={styles.editorTitle}>Python Code Interpreter</span>
        </div>
        <div style={styles.editor}>
          <CodeEditor initialCode={section.initialCode} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  tutorialSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "20px 0",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  content: {
    flex: 1,
    marginBottom: "20px",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "1.1rem",
    color: "#666",
    lineHeight: "1.5",
  },
  editorContainer: {
    width: "100%",
    marginTop: "20px",
    backgroundColor: "#282c34",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  editorHeader: {
    backgroundColor: "#20232a",
    padding: "10px 15px",
    color: "#61dafb",
    fontSize: "1.2rem",
    borderBottom: "1px solid #61dafb",
  },
  editorTitle: {
    fontWeight: "bold",
  },
  editor: {
    padding: "20px",
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
  },
};

export default TutorialSection;
