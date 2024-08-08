import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  ModelSPage,
  Model3Page,
  ModelXPage,
  ModelYPage,
  PrincipalPage,
  ProfilePage,
  RecommendationPage
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/models' element={<ModelSPage />} />
      <Route path='/model3' element={<Model3Page />} />
      <Route path='/modelx' element={<ModelXPage />} />
      <Route path='/modely' element={<ModelYPage />} />
      <Route path='/choose' element={<PrincipalPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/recommendation' element={<RecommendationPage />} />
    </Routes>
  );
}

export default App;
