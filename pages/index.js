import React, {Component} from 'react';
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import RecipeList from "../components/recipe-list/RecipeList";
import './index.scss';

export default class Index extends Component {
	constructor(props) {
		super(props);
	}
	
	static async getInitialProps() {
		console.info('in index.js inside getInitialProps');
		const res = await fetch(`https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json`);
		const recipes = await res.json();
		
		console.log(`Show data fetched. Count: ${recipes.length}`);
		
		return {recipes}
	}
	
	render() {
		let {recipes} = this.props;
		return(
			<Layout>
				<RecipeList list={recipes} />
			</Layout>
		)
	}
}
