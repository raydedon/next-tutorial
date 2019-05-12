import React, {Component} from 'react';
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import './recipe.scss';
import RecipePage from "../components/recipe-page/RecipePage";

export default class Recipe extends Component {
	constructor(props) {
		super(props);
	}
	
	static async getInitialProps(context) {
		const {id} = context.query;
		console.info(`in recipe.js inside getInitialProps context: ${JSON.stringify(id, null, 4)}`);
		const port = process.env.PORT || 5000;
		const res = await fetch(`http://localhost:${port}/api/recipes/${id}`);
		const recipe = await res.json();
		
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
