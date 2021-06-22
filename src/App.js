import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { PageData } from './pages/PageData'

//Pages
import PageNotFound from './pages/404'

function App() {
  return (
    <Router>
      <Switch>
        {PageData.map((item) => {
          return (
            <Route key={item.title} exact path={item.url} component={item.component} />
          )
        })}
        <Route exact path="/404" component={PageNotFound} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
