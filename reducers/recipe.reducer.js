import {
	FETCH_RECIPE_FAILURE,
	FETCH_RECIPE_REQUEST,
	FETCH_RECIPE_SUCCESS,
	TOGGLE_FAVOURITE,
} from '../actions/action-types';
import {INITIAL_RECIPE_STATE} from "../store/Util";

export function recipes(state = INITIAL_RECIPE_STATE, action) {
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
			let {recipes: recipesMap} = state;
			let recipeObj = recipesMap[id];
			let {favourite = false} = recipeObj;
			recipeObj = {...recipeObj, favourite: !favourite};
			recipesMap[id] = recipeObj;
			return {
				...state,
				recipes: {...recipesMap},
			};
		}
		default:
			return state;
	}
}
