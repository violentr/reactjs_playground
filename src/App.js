import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <PageWrapper>
        <Router>
          <Routes>
            <Route path="/home"
              element={<Home />}
            />
          </Routes>
        </Router>
      </PageWrapper>
  );
}

export default App;
