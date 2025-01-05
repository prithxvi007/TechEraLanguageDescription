import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from './Home';
import CourseDetails from './CourseDetails';
import NotFound from './NotFound';
import './App.css';

const App = () => (
  <div className="app-container">
    <header className="header">
      <Link to="/" className="website-logo-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
);

export default App;
