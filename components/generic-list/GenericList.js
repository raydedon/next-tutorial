import React from 'react';
import './generic-list.scss';
import RecipeCard from "../recipe-card/RecipeCard";

const GenericList = ({list = [], ItemComp = RecipeCard, className = ''}) => {
	if(list.length === 0) return null;
	return (
		<div className={`generic-list ${className}`}>
			{list.map(i => (
				<ItemComp {...i} key={i.id} />
			))}
		</div>
	);
};

export default GenericList;
