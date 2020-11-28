import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import users from '../redux/reducers/users';

const middleware = compose(applyMiddleware(thunk, logger));

const reducers = combineReducers({
	users,
});
export default createStore(reducers, composeWithDevTools(middleware));
