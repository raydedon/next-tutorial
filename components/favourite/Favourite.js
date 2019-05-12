import React from 'react';
import './favourite.scss';

const Favourite = ({id = '', favourite = false, toggleFavourite}) => {
	let setFavourite = event => {
		toggleFavourite(id);
		event.preventDefault();
		event.stopPropagation();
	};

	return (
		<div onClick={setFavourite}>
			<span className="fa-stack fa-sm favourite">
				<i className="fa fa-circle fa-stack-2x" />
				<i
					className={`fa${
						favourite ? 's' : 'r'
					} fa-heart fa-stack-1x fa-inverse`}
				/>
			</span>
		</div>
	);
};

export default Favourite;
