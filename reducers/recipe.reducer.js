import {
	FETCH_RECIPE_FAILURE,
	FETCH_RECIPE_REQUEST,
	FETCH_RECIPE_SUCCESS,
	TOGGLE_FAVOURITE,
} from '../actions/action-types';

export function recipes(state = {}, action) {
	let {type, payload} = action;
	switch(type) {
		case FETCH_RECIPE_REQUEST: {
			return {...state, loadingRecipes: true};
		}
		case FETCH_RECIPE_SUCCESS: {
			let {recipes = []} = payload;
			let recipeMap = {};
			recipes.forEach(r => {
				recipeMap[r.id] = r;
			});
			return {...state, recipes: recipeMap, loadingRecipes: false};
		}
		case FETCH_RECIPE_FAILURE: {
			return {...state, loadingRecipes: false};
		}
		case TOGGLE_FAVOURITE: {
			let {id} = payload;
			return {
				...state,
				recipes: state.recipes.map(r => {
					if(r.id !== id) return r;
					let {favourite = false} = r;
					return {...r, favourite: !favourite};
				}),
			};
		}
		default:
			return state;
	}
}
