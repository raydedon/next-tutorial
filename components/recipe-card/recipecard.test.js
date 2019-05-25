import React from 'react';
import {shallow} from 'enzyme';
import RecipeCard from './RecipeCard';

describe('<RecipeCard />', () => {
	it('RecipeCard component should have "card" classname', () => {
		const wrapper = shallow(<RecipeCard />);
		expect(wrapper.find('div').first().hasClass('card')).toEqual(true)
	});
});
