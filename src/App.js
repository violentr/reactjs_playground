import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/"
            element={<Home />}
          />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
