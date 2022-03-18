import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
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
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
