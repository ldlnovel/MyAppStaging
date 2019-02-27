import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import logger from 'redux-logger'
import * as reducers from '../reducers'; /// 拆分的 reducers
let middlewares = [thunk];
let finalCreateStore =  compose(applyMiddleware(...middlewares))(createStore); 

if (process.env.NODE_ENV === 'development') { /// 开发 环境  
  // const logger = require('redux-logger');
  middlewares = [...middlewares, logger];
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    finalCreateStore = compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore);
  }

}

export default function configureStore(initialState) {
  const reducer = combineReducers({...reducers, routing: routerReducer}); 
  const store = finalCreateStore(reducer, initialState);
  // const store = createStore(reducer, applyMiddleware(...middlewares));
  if (process.env.NODE_ENV === 'development' && module.hot) { /// 从新 设置 reducer值   用于热加载  replaceReducer
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers');
      const nextReducer = combineReducers({...nextReducers, routing: routerReducer});
      store.replaceReducer(nextReducer);  
    });
  }

  return store;
}
