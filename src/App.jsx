import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Saved } from "./pages/Saved.jsx";

function App() {
  console.log("key", import.meta.env.VITE_KEY);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Saved" element={<Saved />} />
      </Routes>
    </>
  );
}

export default App;
