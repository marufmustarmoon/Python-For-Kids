// TutorialSection.js
import React from 'react';
import CodeEditor from './CodeEditor';

function TutorialSection({ section }) {
  return (
    <div className="tutorial-section" style={styles.tutorialSection}>
      <div style={styles.content}>
        <h2 style={styles.title}>{section.title}</h2>
        <p style={styles.paragraph}>{section.content}</p>
      </div>
      <div style={styles.editor}>
      <CodeEditor initialCode={section.initialCode} />
      </div>
    </div>
  );
}


const styles = {
  tutorialSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '20px 0',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  content: {
    flex: 1,
    marginRight: '20px', 
  },
  title: {
    marginBottom: '10px',
    color: '#333',
    fontSize: '1.5rem',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#666',
  },
  editor: {
    marginTop : '40px',
  },
};

export default TutorialSection;
