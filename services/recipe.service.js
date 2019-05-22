import fetch from 'isomorphic-unfetch';

export const recipeService = {
	fetchRecipes
};

function fetchRecipes() {
	return fetch('https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json')
		.then(res => res.json())
		.then(recipes => recipes);
}

