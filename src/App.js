import './App.css';
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import {Text} from "./Components/Text"
import Doctors from './Components/Doctors';
function App() {
  return (
    <BrowserRouter>
      <header>
        <p>Pregnancy Medical</p>
        <nav>
        <Link to="/">HOME</Link>
        <Link to="/doctors">OUR DOCTORS</Link>
      </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Text}/>  
        <Route path="/doctors" exact component={Doctors}/>  
      </Switch>      
    </BrowserRouter>
  );
}

export default App;
