import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexLandingPage from "./pages/LandingPage/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexLandingPage />} />
          <Route path="/:categoryset" element={<IndexLandingPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
