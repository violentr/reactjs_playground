import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import Team from './components/Pages/Team';
import Contact from './components/Pages/Contact';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route
            exact={true} 
            path="/"
            element={<Home />}
          />
          <Route path="/about"
            element={<About />}
          />
          <Route path="/services"
            element={<Services />}
          />
          <Route path="/portfolio"
            element={<Portfolio />}
          />
           <Route path="/team"
            element={<Team />}
          />
           <Route path="/contact"
            element={<Contact />}
          />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
