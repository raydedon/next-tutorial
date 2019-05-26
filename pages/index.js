import React, {Component} from 'react';
import Layout from '../components/Layout'
import './index.scss';
import {connect} from "react-redux";
import {fetchRecipesFailure, fetchRecipesSuccess, selectRecipe} from '../actions/recipe-actions';
import {recipeService} from '../services/recipe.service';
import GenericList from "../components/generic-list/GenericList";

export class Index extends Component {
	static async getInitialProps(context) {
		let {store, isServer} = context;
		
		if(isServer) {
			try {
				let recipes = await recipeService.fetchRecipes();
				store.dispatch(fetchRecipesSuccess(recipes));
			} catch (error) {
				store.dispatch(fetchRecipesFailure(error));
			}
		}
		store.dispatch(selectRecipe(''));
	}
	
	render() {
		let {recipes = {}} = this.props;
		return (
			<Layout>
				<GenericList list={Object.values(recipes)} className="grid recipe-list container" />
			</Layout>
		)
	}
}

const mapStateToProps = ({recipes: {recipes = {}}}) => ({recipes});

export default connect(mapStateToProps)(Index);
