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
	                    favourite = false
                    }) => (
	<div className="card">
		<Link as={`/recipes/${id}`} href={`/recipes?id=${id}`}>
			<img src={thumb} className="card-img-top" alt={name}/>
		</Link>
		<div className="card-body">
			<Link as={`/recipes/${id}`} href={`/recipes?id=${id}`}>
				<a className="card-title">{name}</a>
			</Link>
			<p className="card-text">{headline}</p>
			<div className="card-footer">
				<div>
					<p>
						<span>{calories}</span>
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
