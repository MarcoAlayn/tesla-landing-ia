import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, ModelSPage, Model3Page, ModelXPage, ModelYPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/models" element={<ModelSPage />} />
      <Route path="/model3" element={<Model3Page />} />
      <Route path="/modelx" element={<ModelXPage />} />
      <Route path="/modely" element={<ModelYPage />} />
    </Routes>
  );
}

export default App;
