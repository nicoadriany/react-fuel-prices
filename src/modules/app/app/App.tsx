import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import IndexPage from "../../pages/index/IndexPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}></Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
}

export default App;
