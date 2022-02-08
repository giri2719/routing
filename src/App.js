import React from "react";
import Routing from "./Components/Routing";
import Age from "./Components/Age";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Routing />} />
        <Route exact path="/age" element={<Age />} />
      </Routes>
    </Router>
  );
}
export default App;
