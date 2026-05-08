import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AboutMainPage from "./About/AboutMain";
import ContactMainPage from './Contact/ContactMain'
import SkillMainPage from "./Skills/SkillMainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutMainPage />} />
        <Route path="/skill" element={<SkillMainPage/>} />
        <Route path="/contact" element={<ContactMainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;