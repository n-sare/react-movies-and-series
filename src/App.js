import './App.css';
import HomePage from "./HomePage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SeriesList from "./SeriesList";
import {MovieList} from "./MovieList";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* <HomePage /> */}
        
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/serieslist" component={SeriesList}/>
          <Route path="/movielist" component={MovieList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
