import {user} from './user.reducer'

describe('User reducer', () => {
	const INITIAL_USER_STATE = {
		selectedRecipeId: '',
		favourites: {}
	};
	
	it('should return the initial state', () => {
		expect(user(undefined, {})).toEqual(INITIAL_USER_STATE)
	});
	
	it('should handle SELECT_RECIPE set recipeId', () => {
		const selectedRecipeId = 'some-random-text';
		const action = {
			type: 'SELECT_RECIPE',
			payload: {selectedRecipeId}
		};
		
		expect(user(undefined, action)).toEqual({
			selectedRecipeId: selectedRecipeId,
			favourites: {}
		})
	});
	
	it('should handle TOGGLE_FAVOURITE set a recipe as favourite', () => {
		const action = {
			type: 'TOGGLE_FAVOURITE',
			payload: {id: 1}
		};
		
		expect(user(undefined, action)).toEqual({
			selectedRecipeId: '',
			favourites: {
				1: true
			}
		})
	});
	
	it('should handle TOGGLE_FAVOURITE unset a recipe as favourite', () => {
		const action = {
			type: 'TOGGLE_FAVOURITE',
			payload: {id: 1}
		};

		const previousUserState = {
			selectedRecipeId: '',
			favourites: {
				1: true
			}
		};

		const expectedUserState = {
			selectedRecipeId: '',
			favourites: {}
		};
		
		expect(user(previousUserState, action)).toEqual(expectedUserState)
	});
});