import QuestionViewer from "./components/QuestionViewer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestList from "./components/TestList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TestList />} />
          <Route path="/Test" element={<QuestionViewer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
