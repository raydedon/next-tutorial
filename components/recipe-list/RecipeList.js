import React from 'react';
import GenericList from '../generic-list/GenericList';
import './recipelist.scss';
import RecipeCard from '../recipe-card/RecipeCard';

const RecipeList = ({list = []}) => {
	if(list.length === 0) return null;
	return (
		<GenericList
			list={list}
			ItemComp={RecipeCard}
			className="grid recipe-list container"
		/>
	);
};

export default RecipeList;
