import {recipes} from './recipe.reducer'
import {FETCH_RECIPE_FAILURE, FETCH_RECIPE_SUCCESS, TOGGLE_FAVOURITE} from "../actions/action-types";

describe('Recipe reducer', () => {
	const INITIAL_RECIPE_STATE = {
		recipes: {},
		loadingRecipes: false
	};
	
	it('should return the initial state', () => {
		expect(recipes(undefined, {})).toEqual(INITIAL_RECIPE_STATE)
	});
	
	it('should handle FETCH_RECIPE_SUCCESS', () => {
		const recipesArray = [
			{id: '1', description: 'desc-1'},
			{id: '2', description: 'desc-2'}
		];
		
		const action = {
			type: 'FETCH_RECIPE_SUCCESS',
			payload: {recipes: recipesArray},
		};
		
		const expectedRecipes = {
			1: {id: '1', description: 'desc-1'},
			2: {id: '2', description: 'desc-2'}
		};
		const expectedState = {
			recipes: expectedRecipes,
			loadingRecipes: false
		};
		
		expect(recipes(INITIAL_RECIPE_STATE, action)).toEqual(expectedState)
	});
	
	it('should handle FETCH_RECIPE_FAILURE', () => {
		const error = new Error();
		
		const action = {
			type: 'FETCH_RECIPE_FAILURE',
			payload: {error},
		};
		
		const expectedState = {
			recipes: {},
			loadingRecipes: false
		};
		
		expect(recipes(INITIAL_RECIPE_STATE, action)).toEqual(expectedState)
	});
	
	it('should handle TOGGLE_FAVOURITE set favourite to true', () => {
		const action = {
			type: 'TOGGLE_FAVOURITE',
			payload: {id: 1}
		};
		
		const previousRecipeState = {
			recipes: {
				1: {id: '1', description: 'desc-1'},
				2: {id: '2', description: 'desc-2'}
			},
			loadingRecipes: false
		};
		
		const expectedRecipesState = {
			recipes: {
				1: {id: '1', description: 'desc-1', favourite: true},
				2: {id: '2', description: 'desc-2'}
			},
			loadingRecipes: false
		};
		
		expect(recipes(previousRecipeState, action)).toEqual(expectedRecipesState)
	});
	
	it('should handle TOGGLE_FAVOURITE set favourite to false', () => {
		const action = {
			type: 'TOGGLE_FAVOURITE',
			payload: {id: 1}
		};
		
		const previousRecipeState = {
			recipes: {
				1: {id: '1', description: 'desc-1', favourite: true},
				2: {id: '2', description: 'desc-2'}
			},
			loadingRecipes: false
		};
		
		const expectedRecipesState = {
			recipes: {
				1: {id: '1', description: 'desc-1', favourite: false},
				2: {id: '2', description: 'desc-2'}
			},
			loadingRecipes: false
		};
		
		expect(recipes(previousRecipeState, action)).toEqual(expectedRecipesState)
	});
});