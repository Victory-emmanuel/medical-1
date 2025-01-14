import TopInfoBar from "./components/Universal/TopInfoBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <TopInfoBar />
          <Routes>
            <Route />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
