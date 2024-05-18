import React from "react";
import Navbar from "../components/Navbar";
import "../index.css"; // Ensure your styles are correctly imported

// Example array of videos
const videos = [
  {
    title: "Python for Beginners - Learn Python in 1 Hour",
    videoUrl: "https://www.youtube.com/embed/kqtD5dpn9C8?si=vUpGDWc7D8dQOlW6",
  },
  {
    title: "Learn Python - Full Course for Beginners [Tutorial]",
    videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw?si=8ansmvdpvtS9j8lT",
  },
  // Add more video objects as needed
];

function Tutorial() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        <h1>Tutorial</h1>
        {videos.map((video, index) => (
          <div
            className={`card1 ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <h2>{video.title}</h2>
            <iframe
              src={video.videoUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tutorial;
