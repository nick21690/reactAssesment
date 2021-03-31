/* eslint-disable quotes */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';

const reducer = combineReducers(reducers);
export type IState = ReturnType<typeof reducer>;

export default () => {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = applyMiddleware(sagaMiddleware);
    const store = createStore(reducer, composeEnhancers(middlewares));

    sagaMiddleware.run(sagas);

    return store;
};
