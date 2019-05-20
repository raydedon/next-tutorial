import React from 'react';
import Link from 'next/link';
import './recipecard.scss';
import Favourite from '../favourite/Favourite';

const RecipeCard = ({
	id = '',
	name = '',
	thumb = '',
	headline = '',
	calories = '',
	time = '',
	rating = '',
	favourite = false,
}) => (
	<div className="card">
		<Link as={`/recipes/${id}`} href={`/recipes?id=${id}`}>
			<img src={thumb} className="card-img-top" alt={name} />
		</Link>
		<div className="card-body">
			<Link as={`/recipes/${id}`} href={`/recipes?id=${id}`}>
				<h5 className="card-title">{name}</h5>
			</Link>
			<p className="card-text">{headline}</p>
			<div className="card-footer">
				<div className="fela-fzx7h2">
					<p className="fela-bnxrld">
						<span className="fela-18emzam">{calories}</span>
						<span>{time}</span>
					</p>
				</div>
				<div className="rating">{id}</div>
				<div className="rating">{rating}</div>
				<Favourite id={id} favourite={favourite} />
			</div>
		</div>
	</div>
);

export default RecipeCard;
