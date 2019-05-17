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
		const {id} = context.query;
		console.info(`in recipe.js inside getInitialProps context: ${JSON.stringify(id, null, 4)}`);
		const res = await fetch(`https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json`);
		const recipes = await res.json();
		const recipe = recipes.find(({id}) => id === context.query.id);
		
		console.log(`Show data fetched. Count: ${Object.keys(recipe).length}`);
		
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
