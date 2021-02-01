import './App.css';
import Header from "./Header"
import Content from "./Content"
import About from "./About"
import Contact from "./Contact"
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route 
            exact
            path="/"
            component={withRouter(Content)}>
          </Route>
          <Route
            exact
            path="/about"
            component={withRouter(About)}>
          </Route>
          <Route 
            exact
            path="/contact"
            component={withRouter(Contact)}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
