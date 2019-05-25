import * as actions from './recipe-actions';

describe('synchronous action creators', () => {
	it('should create an action to setFavourite', () => {
		const id = 'some-dummy-text';
		const expectedAction = {
			type: 'TOGGLE_FAVOURITE',
			payload: {id}
		};
		expect(actions.toggleFavourite(id)).toEqual(expectedAction);
	});
	
	it('should create an action to select a particular Recipe', () => {
		const selectedRecipeId = 'some-dummy-text';
		const expectedAction = {
			type: 'SELECT_RECIPE',
			payload: {selectedRecipeId}
		};
		expect(actions.selectRecipe(selectedRecipeId)).toEqual(expectedAction);
	});
	
	it('should create an action to set fetched Recipes', () => {
		const recipes = ['Recipe-1', 'Recipe-2'];
		const expectedAction = {
			type: 'FETCH_RECIPE_SUCCESS',
			payload: {recipes}
		};
		expect(actions.fetchRecipesSuccess(recipes)).toEqual(expectedAction);
	});
	
	it('should create an action to set Error while fetching Recipes', () => {
		const error = new Error();
		const expectedAction = {
			type: 'FETCH_RECIPE_FAILURE',
			payload: {error}
		};
		expect(actions.fetchRecipesFailure(error)).toEqual(expectedAction);
	});
});
