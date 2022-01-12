import './App.css';
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';
import Home from './pages';
import WhoWeAre from './pages/WhoWeAre';
import OurValues from './pages/OurValues';
import WhatIsBJJ from './pages/WhatIsBjj';
import Timetable from './pages/Timetable';
import Prices from './pages/Prices';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/who-are-we" element={<WhoWeAre />} />
        <Route path="/our-values" element={<OurValues />} />
        <Route path="/what-is-bjj" element={<WhatIsBJJ />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </Router>
  );
}

export default App;
