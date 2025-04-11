import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import StoredSucess from "./pages/StoredSuccess";
import SingleJourney from "./pages/SingleJourney";
import SingleJourneyProvider from "./providers/SingleJourneyProvider";
import StoredValue from "./pages/StoredValue";
import Home from "./pages/Homepage";
import CardDetailsProvider from "./providers/CardDetailsProvider";
import Payment from "./pages/SingleJourneyPayment";
import SingleJourneySuccess from "./pages/SingleJourneySuccess";

function SharedProvidersLayout() {
  return (
    <CardDetailsProvider>
      <SingleJourneyProvider>
        <Outlet />
      </SingleJourneyProvider>
    </CardDetailsProvider>
  );
}

export default function App(): React.ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedProvidersLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/stored-value" element={<StoredValue />} />
          <Route path="/stored-value/success" element={<StoredSucess />} />
          <Route path="/single-journey" element={<SingleJourney />} />
          <Route path="/single-journey/payment" element={<Payment />} />
          <Route
            path="/single-journey/payment/success"
            element={<SingleJourneySuccess />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
