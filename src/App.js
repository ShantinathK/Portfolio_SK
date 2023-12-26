import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './compnents/contact';
// import Education from './compnents/education';
import Navbar from './compnents/navbar';
// import Projects from './compnents/projects';
// import Skills from './compnents/Skills';
import Home from './compnents/Home';
import EducationPage from './pages/EductionPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='skillsPage' element={<SkillsPage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/educationPage' element={<EducationPage />}></Route>
        <Route path='/navbar' element={<Navbar />}></Route>
        <Route path='/projectPage' element={<ProjectPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
