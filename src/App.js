import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./layouts/MainContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
