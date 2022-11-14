import React from "react";
import { Routes, Router, Route } from "react-router-dom"
import ListDebtors from "./components/ListDebtors";
function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<ListDebtors />} />
      </Routes>
    </>
  );
}

export default App;
