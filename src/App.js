import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Print from "./pages/Print";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/print" element={<Print />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
