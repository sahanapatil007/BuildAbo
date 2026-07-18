import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./routes/index";
import ServicesPage from "./routes/services";
import ContactPage from "./routes/contact";
import AboutPage from "./routes/about";
import ProjectsPage from "./routes/projects";
import ProjectDetails from "./routes/projectdetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
