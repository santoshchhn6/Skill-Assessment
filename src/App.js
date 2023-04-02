import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TestList from "./pages/TestList";
import ReactTest from "./pages/ReactTest";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" exact element={<TestList />} />
            <Route path="/React" element={<ReactTest />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
