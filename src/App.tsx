import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";
import ThankYou from "./pages/ThankYou";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<EventPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
      {/* The old bamboo-reports-web paths keep working after the move. */}
      <Route path="/events/agentic-supply-chain-control-tower" element={<Navigate to="/" replace />} />
      <Route
        path="/events/agentic-supply-chain-control-tower/thank-you"
        element={<Navigate to="/thank-you" replace />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
