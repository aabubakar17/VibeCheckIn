import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import AccommodationList from "./components/AccommodationList";
import AccommodationDetail from "./components/AccommodationDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accommodations" element={<AccommodationList />} />
      <Route path="/accommodation/:id" element={<AccommodationDetail />} />
    </Routes>
  );
}

export default App;
