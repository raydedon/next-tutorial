import {SELECT_RECIPE, TOGGLE_FAVOURITE} from '../actions/action-types';

export function user(state = {}, action) {
	let {type, payload} = action;
	switch(type) {
		case TOGGLE_FAVOURITE: {
			let {id} = payload;
			let {favourites = {}} = state;
			if(id in favourites) delete favourites[id];
			else favourites[id] = true;
			return {...state, favourites: {...favourites}};
		}
		case SELECT_RECIPE: {
			let {selectedRecipeId} = payload;
			return {...state, selectedRecipeId};
		}
		default:
			return state;
	}
}
