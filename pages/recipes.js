import React, {Component} from 'react';
import Layout from '../components/Layout'
import './recipes.scss';
import RecipePage from "../components/recipe-page/RecipePage";
import {recipeService} from "../services/recipe.service";
import {fetchRecipesSuccess, selectRecipe} from "../actions/recipe-actions";
import {connect} from "react-redux";

class Recipes extends Component {
	static async getInitialProps(context) {
		const {query: {id: queryParamId}, store, isServer} = context;
		
		if(isServer) {
			let recipes = await recipeService.fetchRecipes();
			store.dispatch(fetchRecipesSuccess(recipes));
		}
		store.dispatch(selectRecipe(queryParamId));
	}
	
	render() {
		return (
			<Layout>
				<RecipePage />
			</Layout>
		)
	}
}

export default connect()(Recipes);