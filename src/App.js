import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/layout/Header';
import Login from './components/pages/Login';
import Routes from './components/routing/Router';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {/* <Switch> */}
            {/* <Header /> */}
            <Route exact path='/' component={Login} />
            <Route component={Routes} />
          {/* </Switch> */}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
