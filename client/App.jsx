import {React, Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, getState, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Search from './components/Search'
import NavigationBar from './components/NavigationBar'

const store = createStore(
  combineReducers({
    routing: routerReducer
  }),
  applyMiddleware(ReduxPromise, thunk, logger())
);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <NavigationBar />
        {this.props.children}
      </div>
    )
  }
};

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Search} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));