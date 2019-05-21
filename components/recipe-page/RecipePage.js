import React, {Component} from 'react';
import './recipepage.scss';
import Favourite from '../favourite/Favourite';
import {connect} from 'react-redux';

class RecipePage extends Component {
	render() {
		let {
			id = '',
			name = '',
			headline = '',
			calories = '',
			carbos,
			fats,
			proteins,
			description,
			difficulty,
			time = '',
			rating = '',
			image,
			ingredients = [],
			favourite = false
		} = this.props;

		return (
			<div className="recipe-detail">
				<div className="recipe-image">
					<img src={image} className="reciepe-detail-img-top" alt={name} />
				</div>
				<div className="recipe-detail-body responsive-content">
					<div className="recipe-detail-wrapper">
						<h3 className="recipe-detail-title">{name}</h3>
						<p className="recipe-detail-text">{headline}</p>
						<p className="recipe-detail-desc">{description}</p>
						<div className="recipe-detail-more">
							<NameValePair label="Cooking difficulty" value={difficulty} />
							<NameValePair label="Preparation Time" value={time} />
							<NameValePair label="Carbohydrate" value={carbos} />
							<NameValePair label="Fats" value={fats} />
							<NameValePair label="Proteins" value={proteins} />
							<NameValePair label="Calories" value={calories} />
						</div>
						<IngerdientList list={ingredients} className="ingredients-list" />
						<div className="card-footer">
							<div className="rating">{rating}</div>
						</div>
						<Favourite id={id} favourite={favourite} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (
	{recipes: {recipes = {}}, user: {selectedRecipeId = '', favourites = {}}},
	ownProps
) => ({...recipes[selectedRecipeId], favourite: (selectedRecipeId in favourites), ...ownProps});

export default connect(mapStateToProps)(RecipePage);

const NameValePair = ({label, value}) => [
	<span className="label" key={`${label}-label`}>
		{label}
	</span>,
	<span className="value" key={`${label}-value`}>
		{value}
	</span>,
];

const IngerdientList = ({list = [], className = ''}) => (
	<div className={className}>
		<div className="label">Ingredients</div>
		<div className="list-container">
			{list.map((i, index) => (
				<div className="ingredient" key={index}>
					{i}
				</div>
			))}
		</div>
	</div>
);
