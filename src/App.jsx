import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "whatwg-fetch";
import HomePage from "./pages/HomePage";
import Leaderboard from "./pages/Leaderboard";
import LiveCoding from "./pages/LiveCoding";
import Quiz from "./pages/Quiz";
import Tutorial from "./pages/Tutorial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/live-coding" element={<LiveCoding />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
