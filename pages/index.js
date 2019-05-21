import React, {Component} from 'react';
import Layout from '../components/Layout'
import RecipeList from "../components/recipe-list/RecipeList";
import './index.scss';
import {connect} from "react-redux";
import {fetchRecipesSuccess, selectRecipe} from '../actions/recipe-actions';
import {recipeService} from '../services/recipe.service';

class Index extends Component {
	static async getInitialProps(context) {
		let {store, isServer} = context;
		
		if(isServer) {
			let recipes = await recipeService.fetchRecipes();
			store.dispatch(fetchRecipesSuccess(recipes));
		}
		store.dispatch(selectRecipe(''));
	}
	
	render() {
		let {recipes} = this.props;
		return (
			<Layout>
				<RecipeList list={Object.values(recipes)} />
			</Layout>
		)
	}
}

const mapStateToProps = ({recipes: {recipes = {}}}) => ({recipes});

export default connect(mapStateToProps)(Index);
