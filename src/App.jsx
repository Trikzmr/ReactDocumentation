import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChapterPage from "./components/ChapterPage";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapter/:id" element={<ChapterPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;