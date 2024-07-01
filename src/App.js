import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./compnents/contact";
import Navbar from "./compnents/navbar";
import Home from "./compnents/Home";
// import EducationPage from './pages/EductionPage';
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
// import ExperiencePage from './pages/ExperiencePage';
import Resume from "./compnents/Resume";
import Layout from "./layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="skillsPage" element={<SkillsPage />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            {/* <Route path='/educationPage' element={<EducationPage />}></Route> */}
            {/* <Route path='/ExperiencePage' element={<ExperiencePage />}></Route> */}
            <Route path="/Resume" element={<Resume />}></Route>
            <Route path="/navbar" element={<Navbar />}></Route>
            <Route path="/projectPage" element={<ProjectPage />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
