import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header';
import Home from './pages/home';
import Skills from './pages/skills';
import Work from './pages/work';
import Contact from './pages/contact';
import Preloader from './pages/preloader';

function App() {
  return (
    <>
    <Router>
      <Preloader />
      <Header />
      <Home />
      <Skills />
      <Work />
      <Contact />
    </Router>
    </>
  );
}

export default App;
