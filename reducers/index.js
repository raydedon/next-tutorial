import {combineReducers} from 'redux';

import {recipes} from './recipe.reducer';
import {user} from './user.reducer';

const rootReducer = combineReducers({
	recipes,
	user
});

export default rootReducer;