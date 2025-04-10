import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import StoredSucess from "./pages/StoredSuccess";
import SingleJourney from "./pages/SingleJourney";
import SingleJourneyProvider from "./providers/SingleJourneyProvider";
import StoredValue from "./pages/StoredValue";
import Home from "./pages/Homepage";
import CardDetailsProvider from "./providers/CardDetailsProvider";
import Payment from "./pages/Payment";

function CardDetailsLayout() {
  return (
    <CardDetailsProvider>
      <Outlet />
    </CardDetailsProvider>
  );
}

function SingleJourneyLayout() {
  return (
    <SingleJourneyProvider>
      <Outlet />
    </SingleJourneyProvider>
  );
}

export default function App(): React.ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CardDetailsLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/stored-value" element={<StoredValue />} />
          <Route path="/stored-value/success" element={<StoredSucess />} />
        </Route>
        <Route element={<SingleJourneyLayout />}>
          <Route path="/single-journey" element={<SingleJourney />} />
          <Route path="/single-journey/payment" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
