
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/TopNav";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from "./components/Pages/Home";



function App() {
  return (
      // eslint-disable-next-line react/jsx-no-undef
      <Router>
<Navbar/>
  <Switch>
    <Route path='/' exact component={Home} />
  </Switch>
      </Router>
  );
}

export default App;
