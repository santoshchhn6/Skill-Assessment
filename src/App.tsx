import QuestionViewer from "./components/QuestionViewer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestList from "./components/TestList";
import SolvedQuestions from "./components/SolvedQuestions";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TestList />} />
          <Route path="/Test" element={<QuestionViewer />} />
          <Route path="/user_solved_questions" element={<SolvedQuestions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
