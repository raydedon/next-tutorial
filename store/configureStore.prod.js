import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {INITIAL_STATE} from './Util';

// Middleware you want to use in production:
const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState = INITIAL_STATE) {
	if (typeof window === 'undefined') {
		return createStore(rootReducer, initialState, enhancer);
	} else {
		if (!window.store) {
			window.store = createStore(rootReducer, initialState, enhancer);
		}
		return window.store
	}
}
