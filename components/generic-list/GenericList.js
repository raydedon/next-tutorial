import React from 'react';
import './generic-list.scss';

const GenericList = ({list = [], ItemComp, className = ''}) => {
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
