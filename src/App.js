import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, } from
  'react-router-dom';
import Home from './pages';
import WhoWeAre from './pages/whoweare';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/who-we-are' component={WhoWeAre} />
      </Switch>
    </Router>
  );
}

export default App;
