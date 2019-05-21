import {
	FETCH_RECIPE_FAILURE,
	FETCH_RECIPE_REQUEST,
	FETCH_RECIPE_SUCCESS,
	SELECT_RECIPE,
	TOGGLE_FAVOURITE,
	UPDATE_STAR_RATING,
} from './action-types';
import {recipeService} from '../services/recipe.service';

export function fetchRecipes() {
	const request = () => ({
		type: FETCH_RECIPE_REQUEST,
		payload: {recipes: []},
	});
	const success = recipes => ({
		type: FETCH_RECIPE_SUCCESS,
		payload: {recipes},
	});
	const failure = error => ({type: FETCH_RECIPE_FAILURE, payload: {error}});
	
	return dispatch => {
		dispatch(request());
		
		recipeService
			.fetchRecipes()
			.then(
				recipes => dispatch(success(recipes)),
				error => dispatch(failure(error))
			);
	};
}

export const fetchRecipesRequest = () => ({
	type: FETCH_RECIPE_REQUEST,
	payload: {recipes: []},
});

export const fetchRecipesSuccess = recipes => ({
	type: FETCH_RECIPE_SUCCESS,
	payload: {recipes},
});

export const fetchRecipesFailure = error => ({
	type: FETCH_RECIPE_FAILURE,
	payload: {error},
});

export const selectRecipe = selectedRecipeId => ({
	type: SELECT_RECIPE,
	payload: {selectedRecipeId},
});

export const toggleFavourite = id => ({
	type: TOGGLE_FAVOURITE,
	payload: {id},
});

export const setStarRating = id => ({
	type: UPDATE_STAR_RATING,
	payload: {id},
});
