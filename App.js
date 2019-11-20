import React from 'react';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { Redirect } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import About from './component/About'
import Blog from './component/Blog'
import Services from './component/Services'
class App extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
      <div className="App">
        <Router history={history}>
          
          <Switch>
          <Route exact path={'/'}  component={Home}>
              
              </Route>
              <Route path={'/About'} component={About} />
            <Route path={'/Blog'} component={Blog} />
            <Route path={'/Services'} component={Services} />
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>
        </Router>

      </div>
    );
  }
}
export default App;
