import React, {Component} from 'react';
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import './recipes.scss';
import RecipePage from "../components/recipe-page/RecipePage";

export default class Recipe extends Component {
	constructor(props) {
		super(props);
	}
	
	static async getInitialProps(context) {
		const {id: queryParamId} = context.query;
		console.info(`in recipe.js inside getInitialProps context: ${JSON.stringify(queryParamId, null, 4)}`);
		const res = await fetch(`http://localhost:5000/api/recipes/${queryParamId}`);
		const recipe = await res.json();
		
		console.info(`in recipe.js inside getInitialProps, Show data fetched. Count: ${Object.keys(recipe).length}`);
		
		return {recipe}
	}
	
	render() {
		let {recipe} = this.props;
		return(
			<Layout>
				<RecipePage {...recipe} />
			</Layout>
		)
	}
}
