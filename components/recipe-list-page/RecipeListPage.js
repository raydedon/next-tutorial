import React, {Component} from 'react';
import {fetchRecipes} from '../../actions/recipe-actions';
import {connect} from 'react-redux';
import RecipeList from '../recipe-list/RecipeList';

class RecipeListPage extends Component {
	componentDidMount() {
		let {fetchRecipes, recipes = []} = this.props;
		recipes.length === 0 && fetchRecipes();
	}

	render() {
		let {recipes = [], loadingRecipes = false} = this.props;
		if(loadingRecipes) return <div>Loading ...</div>;
		return <RecipeList list={recipes} />;
	}
}

const mapStateToProps = ({recipes: {recipes = [], loadingRecipes = false}}) => ({recipes, loadingRecipes});

const mapDispatchToProps = dispatch => ({
	fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListPage);
