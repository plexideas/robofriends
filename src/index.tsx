import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import RobotSaga from './sagas';
import mainReducer from './reducers';
import Root from './containers';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    mainReducer,
    applyMiddleware(logger, sagaMiddleware, thunk),
  )
sagaMiddleware.run(RobotSaga);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);
