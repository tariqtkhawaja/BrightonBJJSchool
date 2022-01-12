import './App.css';
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';
import Home from './pages';
import WhoWeAre from './pages/WhoWeAre';
import OurValues from './pages/OurValues';
import WhatIsBJJ from './pages/WhatIsBjj';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/who-are-we" element={<WhoWeAre />} />
        <Route path="/our-values" element={<OurValues />} />
        <Route path="/what-is-bjj" element={<WhatIsBJJ />} />
      </Routes>
    </Router>
  );
}

export default App;
