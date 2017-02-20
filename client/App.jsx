import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import {syncHistoryWithStore} from 'react-router-redux';
import AppReducer from './reducers/';
import Search from './components/search/';
import NavigationBar from './components/navigation_bar/';
import SignIn from './components/sign_in/';
import SignUp from './components/sign_up/';

const store = createStore(
    AppReducer,
    compose(
        applyMiddleware(ReduxPromise, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
    render() {
        return (
        <div >
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
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
            </Route>
        </Router>
  </Provider>
), document.getElementById('app'));