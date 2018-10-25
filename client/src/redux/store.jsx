import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import appReducers from '../redux/reducers';
import rootSaga from '../redux/saga'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export const persistor = persistStore(store);


sagaMiddleware.run(rootSaga);

export default store;
