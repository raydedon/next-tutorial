import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {INITIAL_STATE} from './Util';

export default function configureStore(initialState = INITIAL_STATE) {
	const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancer = composeEnhancers(applyMiddleware(thunk));
	
	
	if (typeof window === 'undefined') {
		return createStore(rootReducer, initialState, enhancer);
	} else {
		if (!window.store) {
			window.store = createStore(rootReducer, initialState, enhancer);
		}
		return window.store
	}
}
