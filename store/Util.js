export const INITIAL_USER_STATE = {
	selectedRecipeId: '',
	favourites: {}
};
export const INITIAL_RECIPE_STATE = {
	recipes: {},
	loadingRecipes: false
};
export const INITIAL_STATE = {
	recipes: INITIAL_RECIPE_STATE,
	user: INITIAL_USER_STATE,
};
