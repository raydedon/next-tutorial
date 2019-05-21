import fetch from 'isomorphic-unfetch';

export const recipeService = {
	fetchRecipes
};

function fetchRecipes() {
	return fetch('http://localhost:5000/api/recipes')
		.then(res => res.json())
		.then(recipes => recipes);
}

