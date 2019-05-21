import * as actions from './recipe-actions';
import * as types from './action-types';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('toggleFavourite action', () => {
	it('should create an action to setFavourite', () => {
		const id = 'some-dummy-text';
		const expectedAction = {
			type: types.TOGGLE_FAVOURITE,
			payload: {id},
		};
		expect(actions.toggleFavourite(id)).toEqual(expectedAction);
	});
});

describe('fetchRecipes async action', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	it('creates FETCH_RECIPE_SUCCESS when fetching recipes has been done', () => {
		fetchMock.getOnce('http://localhost:5000/api/recipes', {
			body: ['recipe 1', 'recipe 2'],
			headers: {'content-type': 'application/json'},
		});

		const expectedActions = [
			{
				type: types.FETCH_RECIPE_REQUEST,
			},
			{
				type: types.FETCH_RECIPE_SUCCESS,
				payload: {
					recipes: ['recipe 1', 'recipe 2'],
				},
			},
		];
		const store = mockStore({
			recipes: {
				recipes: [],
			},
		});

		store.dispatch(actions.fetchRecipes());
		// return of async actions
		expect(store.getActions()).toEqual(expectedActions);
	});
});
