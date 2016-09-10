/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import 'babel-polyfill';

/*
  Import Components
*/
import App from './components/App';
import Main from './components/Main';
import IndexPage from './components/IndexPage'

/* Import our data store */
import store, { history } from './store';

/*
  Import CSS
*/
import css from './styles/style.styl'

/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/
render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

