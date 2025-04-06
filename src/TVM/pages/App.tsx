import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleJourney from "./SingleJourney";
import StoredValue from "./StoredValue";
import Home from "./Homepage";

export default function App(): React.ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/single-journey" element={<SingleJourney />}></Route>
        <Route path="/stored-value" element={<StoredValue />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
