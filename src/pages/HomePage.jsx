import React from 'react';
import '../App.css'; // Make sure the path is correct to include the CSS
import { useNavigate } from 'react-router-dom'; 

function Card({ title, description, navigateTo  }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    if (navigateTo) {
      navigate(navigateTo); 
    }
  };
  return (
    <div className="card" onClick={handleCardClick}>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}

function HomePage() {
  return (
    <>
    <div className='title'>Learn Basic Python</div>
    <div className="container">
      <Card 
        title="Live Coding"
        description="Dive into coding with live examples."
        navigateTo="/live-coding" 
        
      />
      <Card 
        title="Tutorial Video"
        description="Watch and learn with our tutorial videos."
        navigateTo="/tutorial" 

        
      />
      <Card 
        title="Quiz"
        description="Test your knowledge with our quizzes."
        navigateTo="/quiz" 

       
      />
    </div>
    </>
  );
}

export default HomePage;
