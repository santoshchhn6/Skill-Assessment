import QuestionViewer from "./components/QuestionViewer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestList from "./components/TestList";
import SolvedQuestions from "./components/SolvedQuestions";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TestList />} />
          <Route path="/Test" element={<QuestionViewer />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/user_solved_questions" element={<SolvedQuestions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
