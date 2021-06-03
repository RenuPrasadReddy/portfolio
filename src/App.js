import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Project from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills /> 
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
