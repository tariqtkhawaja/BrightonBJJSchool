import './App.css';
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';
import Home from './pages';
import WhoWeAre from './pages/WhoWeAre';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/who-are-we" element={<WhoWeAre />} />
      </Routes>
    </Router>
  );
}

export default App;
